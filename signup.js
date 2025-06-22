document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const errorMsg = document.getElementById("signup-error-msg");

  // Get existing users or empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username already exists
  const userExists = users.some(user => user.username === username);

  if (userExists) {
    errorMsg.textContent = "Username already exists.";
    return;
  }

  // Add new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created! You can now log in.");
  window.location.href = "index.html";
});
