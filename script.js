function processPayment() {
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

  // Apply Discounts
  if (discountCode === "VIP50") amount *= 0.5;
  else if (discountCode === "FREQUENT20") amount *= 0.8;

  let receiptDetails = `
      <p><strong>Vehicle:</strong> ${vehicleType.toUpperCase()}</p>
      <p><strong>Date & Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Amount Paid:</strong> ₹${amount}</p>
  `;

  document.getElementById("receiptDetails").innerHTML = receiptDetails;
  document.getElementById("receipt").classList.remove("hidden");
  document.getElementById("gateImage").classList.add("hidden");

  // Generate QR Code
  let qr = new QRious({
    element: document.getElementById("qrCodeCanvas"),
    value: `Vehicle: ${vehicleType}, Amount: ₹${amount}, Date: ${new Date().toLocaleString()}`,
    size: 150,
  });
  document.getElementById("qrCodeCanvas").classList.remove("hidden");

  // Save Transaction History
  saveTollHistory(vehicleType, amount);

  // Play Voice Alert
  let audio = new Audio("payment-success.mp3");
  audio.play();
}

function saveTollHistory(vehicle, amount) {
  let history = JSON.parse(localStorage.getItem("tollHistory")) || [];
  history.unshift(
    `🚗 ${vehicle.toUpperCase()} - ₹${amount} - ${new Date().toLocaleString()}`
  );
  if (history.length > 5) history.pop();
  localStorage.setItem("tollHistory", JSON.stringify(history));
  updateTollHistory();
}

function updateTollHistory() {
  let history = JSON.parse(localStorage.getItem("tollHistory")) || [];
  document.getElementById("tollHistory").innerHTML = history
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function downloadReceipt() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();
  doc.text(document.getElementById("receiptDetails").innerText, 20, 30);
  doc.save("Toll_Receipt.pdf");
}

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  this.textContent = document.body.classList.contains("light-mode")
    ? "🌙 Switch to Dark Mode"
    : "☀️ Switch to Light Mode";
});

window.onload = updateTollHistory;
