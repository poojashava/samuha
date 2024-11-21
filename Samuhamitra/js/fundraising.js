function initiateUPIPayment() {
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const orphanage = document.getElementById('orphanage').value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const upiId = "your-organization@upi";  // Replace with your UPI ID

    // Create UPI payment URL
    const upiLink = `upi.//pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(orphanage)}`;

    // Redirect to the chosen UPI app or handler
    window.location.href = upiLink;
}

function goToHomepage() {
    // Redirect to the homepage (replace 'index.html' with your actual homepage URL)
    window.location.href = 'index.html';
}