document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const listings = document.querySelectorAll('.listing');

    // Filter carpenter listings based on the search term
    listings.forEach(listing => {
        const name = listing.querySelector('.details h3').textContent.toLowerCase();
        const location = listing.querySelector('.details p') ? listing.querySelector('.details p').textContent.toLowerCase() : '';

        if (name.includes(searchTerm) || location.includes(searchTerm)) {
            listing.style.display = 'flex'; // Show the listing
        } else {
            listing.style.display = 'none'; // Hide the listing
        }
    });
});

// Function to handle enquiry
function sendEnquiry(phone) {
    alert(`Enquiry sent to ${phone}`);
}

// Function to open WhatsApp with a number
function openWhatsApp(phone) {
    window.open(`https://wa.me/${phone}`, '_blank');
}

// Function to make a call (dummy function for now)
function callCarpenter(phone) {
    alert(`Calling ${phone}`);
}``
