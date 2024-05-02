const signupForm = document.getElementById('signupForm');
const message = document.getElementById('message');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = this.email.value;
  const password = this.password.value;

  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the email is already taken
  const emailExists = users.some(u => u.email === email);

  if (!emailExists) {
    // Add new user to the users array
    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    message.textContent = 'Sign up successful! You can now login.';
  } else {
    message.textContent = 'Email already exists, please choose another one.';
  }
});

const loginForm = document.getElementById('loginForm');
const messag = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = this.email.value;
  const password = this.password.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the user exists and credentials are correct
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Store user data in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
    message.textContent = 'Login successful! Redirecting...';
    setTimeout(() => {
      window.location.href = 'dashboard.html'; // Redirect to dashboard page
    }, 1500);
  } else {
    message.textContent = 'Invalid email or password';
  }
});


const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function() {
  const signupLink = document.querySelector(".signup");
  const container = document.getElementById("container");

  signupLink.addEventListener("click", function(event) {
    event.preventDefault();
    container.classList.add("right-panel-active");
  });
});
