document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.getElementById("registerUsername").value.trim();
      let password = document.getElementById("registerPassword").value.trim();

      if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
      }

      // Check if the username is already registered
      if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose a different one.");
        return;
      }

      // Save credentials in localStorage
      localStorage.setItem(username, JSON.stringify({ password: password }));
      alert("Registration successful! You can now log in.");
      registerForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.getElementById("loginUsername").value.trim();
      let password = document.getElementById("loginPassword").value.trim();

      if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
      }

      let storedUser = localStorage.getItem(username);

      if (!storedUser) {
        alert("User not found. Please register first.");
        return;
      }

      let userData = JSON.parse(storedUser);

      if (userData.password !== password) {
        alert("Incorrect password. Try again.");
        return;
      }

      alert("Login successful!");
      sessionStorage.setItem("loggedInUser", username);
      window.location.href = "index.html"; // Redirect to main page after login
    });
  }
});
