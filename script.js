// Open Payment Page in a New Tab
function openPaymentPage() {
  let vehicleType = document.getElementById("vehicleType").value;
  let paymentMethod = document.getElementById("paymentMethod").value;
  let discountCode = document.getElementById("discountCode").value;

  let amount =
    vehicleType === "car"
      ? 50
      : vehicleType === "bike"
      ? 20
      : vehicleType === "truck"
      ? 100
      : 0;

  if (discountCode === "VIP50") amount *= 0.5;
  else if (discountCode === "FREQUENT20") amount *= 0.8;

  let paymentURL = `payment.html?vehicle=${vehicleType}&amount=${amount}&method=${paymentMethod}`;
  window.open(paymentURL, "_blank");
}

// Open Transaction History in a New Tab
function openTransactionHistory() {
  window.open("history.html", "_blank");
}

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  this.textContent = document.body.classList.contains("light-mode")
    ? "🌙 Switch to Dark Mode"
    : "☀️ Switch to Light Mode";
});
