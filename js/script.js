document.addEventListener('DOMContentLoaded', function() {
  $(function(){
    const apiUrl = 'https://my-json-server.typicode.com/jemwork/mock-exam/users';

// Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const newUser = {
        firstName,
        lastName,
        age,
        sex,
        email,
        username,
        password
    };

    try {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });

        alert('User signed up successfully!');
    } catch (error) {
        alert('Error signing up user.');
        console.error(error);
    }
});

// Log In Form Submission
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${apiUrl}?username=${username}&password=${password}`);
        const users = await response.json();

        if (users.length > 0) {
            alert('Logged in successfully!');
        } else {
            alert('Invalid username or password.');
        }
    } catch (error) {
        alert('Error logging in.');
        console.error(error);
    }
});

});





});
