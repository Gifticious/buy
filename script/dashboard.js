// script.js

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');
  
    if (username === 'owner' && password === 'admin.owner') {
      loginMessage.textContent = 'Login successful!';
      window.location.href = 'order.html'
    } else {
      loginMessage.textContent = 'Invalid username or password. Please try again.';
    }
  }
  