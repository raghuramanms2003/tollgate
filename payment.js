// Get payment details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const vehicle = urlParams.get("vehicle") || "Unknown";
const amount = urlParams.get("amount") || "0";
const dateTime = new Date().toLocaleString();

document.getElementById("paymentDetails").innerHTML = `
    <p><strong>Vehicle:</strong> ${vehicle.toUpperCase()}</p>
    <p><strong>Amount Paid:</strong> ₹${amount}</p>
    <p><strong>Date & Time:</strong> ${dateTime}</p>
`;

// Generate QR Code dynamically
const qrCanvas = document.getElementById("qrCodeCanvas");
const qr = new QRious({
  element: qrCanvas,
  value: `Vehicle: ${vehicle}, Amount: ₹${amount}, Date: ${dateTime}`,
  size: 200,
});

// Function to Download Dynamic Receipt
function downloadReceipt() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Toll Receipt", 20, 20);
  doc.setFontSize(12);
  doc.text(`Vehicle: ${vehicle.toUpperCase()}`, 20, 40);
  doc.text(`Amount Paid: ₹${amount}`, 20, 50);
  doc.text(`Date & Time: ${dateTime}`, 20, 60);

  // Convert QR code to image and add to PDF dynamically
  const qrImage = qrCanvas.toDataURL("image/png");
  doc.addImage(qrImage, "PNG", 20, 70, 50, 50);

  doc.save(`Receipt_${vehicle}_${Date.now()}.pdf`); // Dynamically name the receipt file
}
