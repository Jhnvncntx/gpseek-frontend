const form = document.getElementById('login-form');
const pwd = document.getElementById('password');
const toggle = document.getElementById('toggle-button');

form.addEventListener("submit", function(e){
    e.preventDefault();
});

toggle.addEventListener('click', () => {
  pwd.type = pwd.type === "password" ? "text" : "password";
  if (pwd.type === "text") {
    toggle.innerText = "Hide";
  } else {
    toggle.innerText = "Show";
  }
});


