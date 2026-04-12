// Tab switching logic
const signupTab = document.getElementById('showSignup');
const loginTab = document.getElementById('showLogin');
const signupFormDiv = document.getElementById('signupForm');
const loginFormDiv = document.getElementById('loginForm');


signupTab.onclick = function() {
  loginFormDiv.style.display = 'none';
  signupFormDiv.style.display = '';
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
}
loginTab.onclick = function() {
  loginFormDiv.style.display = '';
  signupFormDiv.style.display = 'none';
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
}

function isName(str) {
  return /^[a-zA-Z\s]+$/.test(str);
}
function isNumberOrSpecial(str) {
  return /^[\d\W_]+$/i.test(str) && !/[a-zA-Z]/.test(str);
}

document.getElementById('signup-form').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('signup-email').value.trim();
 const username = document.getElementById('signup-username').value.trim();
  const pass = document.getElementById('signup-password').value.trim();
  const confirm = document.getElementById('signup-confirm').value.trim();
  const err = document.getElementById('signup-error');
  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    err.textContent = "Enter a valid email address.";
    return;
  }
  

  if (!isNumberOrSpecial(pass) || !isNumberOrSpecial(confirm)) {
    err.textContent = "Password fields must contain only numbers and special characters.";
    return;
  }
  if (pass !== confirm) {
    err.textContent = "Passwords do not match.";
    return;
  }

  localStorage.setItem("username", username);
    localStorage.setItem("password", pass);
  err.textContent = "";

  // Successful signup, redirect
  signupFormDiv.style.display = 'none';
  loginFormDiv.style.display = '';
  loginTab.classList.add('active');
  signupTab.classList.remove('active');

   
});

// Only numbers and special characters validation (no letters)
function isName(str) {
  return /^[a-zA-Z\s]+$/.test(str);
}
function isNumberOrSpecial(str) {
  return /^[\d\W_]+$/i.test(str) && !/[a-zA-Z]/.test(str);
}

document.getElementById('login-form').addEventListener('submit', function(e){
  e.preventDefault();
  const inputuser = document.getElementById('login-username').value.trim();
  const inputpass = document.getElementById('login-password').value.trim();
  const err = document.getElementById('login-error');
   
  const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

  if (!isName(inputuser)) {
    err.textContent = "Username must only have letters and spaces.";
    return;
  }
  if ( !isNumberOrSpecial(inputpass)) {
    err.textContent = "Password must contain only numbers and special characters.";
    return;
  }
    if (inputuser === savedUser && inputpass === savedPass) {
      err.textContent = "";
      window.location.href = "python-quiz.html";
    } else {
      err.textContent = "Incorrect username or password.";
    }
  });
  
