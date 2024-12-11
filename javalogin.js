// Function to open a specific modal and close others
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
  document.getElementById('modalBackdrop').style.display = 'block'; // Show backdrop
  const otherModal = modalId === 'loginModal' ? 'signupModal' : 'loginModal';
  closeModal(otherModal); // Ensure other modal is closed
}

// Function to close a specific modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById('modalBackdrop').style.display = 'none'; // Hide backdrop
}

// Close modal when clicking outside of the content
window.onclick = function(event) {
  if (event.target.classList.contains('modal-backdrop')) {
    closeModal('loginModal');
    closeModal('signupModal');
  }
}

// Function to handle login
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Login successful');
      closeModal('loginModal');
      // Redirect or perform actions on successful login
    } else {
      alert('Login failed: ' + data.message);
    }
  })
  .catch(error => console.error('Error:', error));
}

// Function to handle signup
function signup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Signup successful');
      closeModal('signupModal');
      openModal('loginModal');  // Show login modal after successful signup
    } else {
      alert('Signup failed: ' + data.message);
    }
  })
  .catch(error => console.error('Error:', error));
}
