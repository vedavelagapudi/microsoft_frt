document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Function to show login form and hide sign up form
function showLoginForm() {
    var loginContainer = document.getElementById('loginContainer');
    var signupContainer = document.getElementById('signupContainer');
  
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
  }
  
  // Function to show sign up form and hide login form
  function showSignupForm() {
    var loginContainer = document.getElementById('loginContainer');
    var signupContainer = document.getElementById('signupContainer');
  
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
  }
  
  // Simulated user data (replace with your actual authentication logic)
  var users = [
    { username: 'admin', password: 'password' },
    { username: 'user', password: '123456' }
  ];
  
  // Login Form Validation
  function validateLoginForm(event) {
    event.preventDefault();
    
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    var errorMsg = document.getElementById('login-error-msg');
  
    // Simulate authentication (replace with actual logic)
    var user = users.find(function(user) {
      return user.username === username && user.password === password;
    });
  
    if (user) {
      // Simulate redirecting to another page
      errorMsg.textContent = ''; // Clear any previous error message
      window.location.href = 'dashboard.html';
    } else {
      errorMsg.textContent = 'Invalid username or password. Please try again.';
      // Optional: Clear input fields on failed login
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
    }
  }
  
  // Sign Up Form Validation
  function validateSignupForm(event) {
    event.preventDefault();
  
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    var successMsg = document.getElementById('signup-success-msg');
    var errorMsg = document.getElementById('signup-error-msg');
  
    // Simple validation (replace with actual logic)
    if (username.length >= 4 && password.length >= 6) {
      // Replace with actual sign-up logic (e.g., API call) in a real application
      successMsg.textContent = 'Sign up successful!';
      errorMsg.textContent = ''; // Clear any previous error message
      // Clear input fields after successful sign-up (optional)
      document.getElementById('signup-username').value = '';
      document.getElementById('signup-password').value = '';
    } else {
      errorMsg.textContent = 'Username must be at least 4 characters and password must be at least 6 characters.';
    }
  }
  
