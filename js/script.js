document.addEventListener('DOMContentLoaded', function() {
 
    // fetch('https://my-json-server.typicode.com/jemwork/mock-exam/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     const userList = document.getElementById('userList');
    //     users.forEach(user => {
    //       const userCard = document.createElement('div');
    //       userCard.classList.add('user-card');
    //       userCard.innerHTML = `
    //         <img src="${user.profilePicture}" alt="${user.name}" class="profile-picture">
    //         <div class="user-info">
    //           <h2>${user.name}</h2>
    //           <p>Email: ${user.email}</p>
    //           <p>Address: ${user.address.street}, ${user.address.city}</p>
    //           <p>Job Position: ${user.jobPosition}</p>
    //         </div>
    //       `;
    //       userList.appendChild(userCard);
    //     });
    //   })
    //   .catch(error => console.error('Error fetching users:', error));

    // const searchInput = document.getElementById('searchInput');
    // searchInput.addEventListener('input', function() {
    //   const searchTerm = searchInput.value.toLowerCase();
    //   const userCards = document.querySelectorAll('.user-card');
    //   userCards.forEach(card => {
    //     const userName = card.querySelector('h2').textContent.toLowerCase();
    //     const userEmail = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
    //     const userAddress = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
    //     const userJobPosition = card.querySelector('p:nth-of-type(3)').textContent.toLowerCase();
        
    //     if (userName.includes(searchTerm) || userEmail.includes(searchTerm) || 
    //         userAddress.includes(searchTerm) || userJobPosition.includes(searchTerm)) {
    //       card.style.display = 'block';
    //     } else {
    //       card.style.display = 'none';
    //     }
    //   });
    // });
    const userList = document.getElementById('userList');
    const searchInput = document.getElementById('searchInput');
  
    // Function to fetch and display user profiles
    function fetchUsers() {
      fetch('users.json')
        .then(response => response.json())
        .then(data => {
          userList.innerHTML = ''; // Clear previous list
          data.users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-profile';
            userDiv.innerHTML = `
              <img src="${user.profilePicture}" alt="Profile Picture">
              <div class="user-details">
                <h3>${user.fullName}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                <p><strong>Job Position:</strong> ${user.jobPosition}</p>
              </div>
            `;
  
            // Display questions for this user
            if (user.questions && user.questions.length > 0) {
              const questionsDiv = document.createElement('div');
              questionsDiv.className = 'user-questions';
              user.questions.forEach(question => {
                const questionElement = document.createElement('div');
                questionElement.innerHTML = `
                  <p><strong>Question:</strong> ${question.question}</p>
                  <ul>
                    ${question.options.map(option => `<li>${option}</li>`).join('')}
                  </ul>
                `;
                questionsDiv.appendChild(questionElement);
              });
              userDiv.appendChild(questionsDiv);
            }
  
            userList.appendChild(userDiv);
          });
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  
    fetchUsers();
  
    // Filter users based on search input (same as before)
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
      const userProfiles = document.querySelectorAll('.user-profile');
  
      userProfiles.forEach(profile => {
        const fullName = profile.querySelector('h3').textContent.toLowerCase();
        const email = profile.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
        const address = profile.querySelector('p:nth-of-type(3)').textContent.toLowerCase();
        const jobPosition = profile.querySelector('p:nth-of-type(4)').textContent.toLowerCase();
  
        if (fullName.includes(searchTerm) || email.includes(searchTerm) || address.includes(searchTerm) || jobPosition.includes(searchTerm)) {
          profile.style.display = 'block';
        } else {
          profile.style.display = 'none';
        }
      });
    });
  });
  