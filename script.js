document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userFound = users.find(user => user.username === username && user.password === password);

  if (userFound) {
    errorMsg.textContent = "";
    localStorage.setItem("loggedInUser", username); // optional
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
});
