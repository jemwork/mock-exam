document.addEventListener('DOMContentLoaded', function() {
    fetch('https://my-json-server.typicode.com/jemwork/mock-exam/users') // Example API endpoint
      .then(response => response.json())
      .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.classList.add('user-card');
          userCard.innerHTML = `
            <img src="${user.profilePicture}" alt="${user.name}" class="profile-picture">
            <div class="user-info">
              <h2>${user.name}</h2>
              <p>Email: ${user.email}</p>
              <p>Address: ${user.address.street}, ${user.address.city}</p>
              <p>Job Position: ${user.jobPosition}</p>
            </div>
          `;
          userList.appendChild(userCard);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
      const userCards = document.querySelectorAll('.user-card');
      userCards.forEach(card => {
        const userName = card.querySelector('h2').textContent.toLowerCase();
        const userEmail = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        const userAddress = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
        const userJobPosition = card.querySelector('p:nth-of-type(3)').textContent.toLowerCase();
        
        if (userName.includes(searchTerm) || userEmail.includes(searchTerm) || 
            userAddress.includes(searchTerm) || userJobPosition.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  