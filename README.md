# Toll Gate Management System

## Overview
The **Toll Gate Management System** is a web-based application designed to streamline toll collection and enhance user experience with features like QR code-based transactions, voice alerts, discount codes, and a fast lane for RFID-based prepaid users.

## Features
- **Secure Login & Registration**: Users can create accounts and log in using system-stored credentials.
- **Payment Page**: Redirects to a new tab when clicking "Pay Toll" for a seamless transaction experience.
- **QR Code Generation**: Displays a QR code after a successful payment for verification.
- **Transaction History**: Opens in a new tab, allowing users to track their past transactions.
- **Light/Dark Mode Toggle**: Users can switch between themes based on their preference.
- **Downloadable Toll Receipt (PDF)**: Allows users to download a receipt for their payments.
- **Discount Codes**: Offers discounts for VIPs and frequent travelers.
- **Fast Lane for RFID Users**: Allows prepaid users to pass through a separate fast lane.

## Technologies Used
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Razorpay/Stripe (Configurable)
- **PDF Generation**: jsPDF
- **QR Code Generation**: qrcode.react
- **Voice Alerts**: Web Speech API



## Usage
1. Register/Login to the system.
2. Enter vehicle details and proceed to pay the toll.
3. Receive a QR code upon successful payment.
4. Download the receipt if required.
5. Use RFID fast lane for prepaid transactions.





