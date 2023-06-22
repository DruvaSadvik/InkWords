const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

signupButton.addEventListener('click', () => {
  signupButton.classList.add('active');
  loginButton.classList.remove('active');
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});

loginButton.addEventListener('click', () => {
  loginButton.classList.add('active');
  signupButton.classList.remove('active');
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

