// Show the Food Donation form and change the background
function showFoodForm() {
    document.body.classList.remove('clothes-bg');
    document.body.classList.add('food-bg');
    document.getElementById('food').style.display = 'block';
    document.getElementById('clothes').style.display = 'none';
    document.getElementById('profile-container').style.display = 'none';
    document.getElementById('orphanage-select-section').style.display = 'none';
    scrollToSection('food');
}

// Show the Clothes Donation form and change the background
function showClothesForm() {
    document.body.classList.remove('food-bg');
    document.body.classList.add('clothes-bg');
    document.getElementById('clothes').style.display = 'block';
    document.getElementById('food').style.display = 'none';
    document.getElementById('profile-container').style.display = 'none';
    document.getElementById('orphanage-select-section').style.display = 'none';
    scrollToSection('clothes');
}

// Scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Food Donation: Show donate button when all fields are filled
function checkFoodForm() {
    const personsInput = document.getElementById('persons').value;
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    const donateButton = document.getElementById('donate-food-btn');

    if (personsInput > 0 && dateInput && timeInput) {
        donateButton.style.display = 'inline-block';
    } else {
        donateButton.style.display = 'none';
    }
}

// Clothes Donation: Show donate button when all fields are filled
function checkClothesForm() {
    const genderInput = document.getElementById('gender').value;
    const ageGroupInput = document.getElementById('age-group').value;
    const pairsInput = document.getElementById('pairs').value;
    const donateButton = document.getElementById('donate-clothes-btn');

    if (genderInput && ageGroupInput && pairsInput > 0) {
        donateButton.style.display = 'inline-block';
    } else {
        donateButton.style.display = 'none';
    }
}

// Show Orphanage Profiles
function showOrphanageProfiles(donationType) {
    document.getElementById('profile-container').style.display = 'block';
    document.getElementById('orphanage-select-section').style.display = 'block';
    scrollToSection('profile-container');
}

// Show the final donate button after orphanage selection
function showFinalDonateButton() {
    const orphanageSelect = document.getElementById('orphanage-select').value;
    const finalDonateButton = document.getElementById('final-donate-btn');

    if (orphanageSelect) {
        finalDonateButton.style.display = 'inline-block';
    } else {
        finalDonateButton.style.display = 'none';
    }
}

// Final Donation Confirmation
function finalDonation() {
    alert('Thank you for your donation!');
}