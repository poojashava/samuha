// Function to navigate to the notes page for the selected guest
function navigateToPage(range) {
    // Store the selected range in local storage
    localStorage.setItem('selectedGuest', range);
    // Redirect to the note page
    document.getElementById('selection-container').style.display = 'none';
    document.getElementById('note-container').style.display = 'block';
    loadGuestInfo();
    loadNotes();
}

// Function to load guest information for the selected guest
function loadGuestInfo() {
    const guestNumber = localStorage.getItem('selectedGuest');
    const guestInfo = localStorage.getItem(`guestInfo_${guestNumber}`);
    
    if (guestInfo) {
        const guestData = JSON.parse(guestInfo);
        document.getElementById('guest-name').value = guestData.name;
        document.getElementById('guest-contact').value = guestData.contact;
        document.getElementById('guest-name').disabled = true;
        document.getElementById('guest-contact').disabled = true;
        document.getElementById('edit-button').style.display = 'block';
        document.getElementById('save-edit-button').style.display = 'none';
    } else {
        document.getElementById('guest-name').value = '';
        document.getElementById('guest-contact').value = '';
        document.getElementById('guest-name').disabled = false;
        document.getElementById('guest-contact').disabled = false;
        document.getElementById('edit-button').style.display = 'none';
        document.getElementById('save-edit-button').style.display = 'block';
    }
}

// Function to save guest information for the selected guest
function saveGuestInfo() {
    const guestNumber = localStorage.getItem('selectedGuest');
    const guestName = document.getElementById('guest-name').value;
    const guestContact = document.getElementById('guest-contact').value;
    const guestInfo = {
        name: guestName,
        contact: guestContact
    };
    localStorage.setItem(`guestInfo_${guestNumber}`, JSON.stringify(guestInfo));
    alert('Guest information saved!');
    document.getElementById('guest-name').disabled = true;
    document.getElementById('guest-contact').disabled = true;
    document.getElementById('edit-button').style.display = 'block';
    document.getElementById('save-edit-button').style.display = 'none';
}

// Function to edit guest information for the selected guest
function editGuestInfo() {
    document.getElementById('guest-name').disabled = false;
    document.getElementById('guest-contact').disabled = false;
    document.getElementById('edit-button').style.display = 'none';
    document.getElementById('save-edit-button').style.display = 'block';
}

// Function to load notes for the selected guest
function loadNotes() {
    const guestNumber = localStorage.getItem('selectedGuest');
    document.getElementById('note-heading').innerText = `Notes for Room ${guestNumber}`;
    
    // Load saved notes if they exist
    const savedNotes = localStorage.getItem(`notes_${guestNumber}`);
    if (savedNotes) {
        document.getElementById('note-text').value = savedNotes;
    } else {
        document.getElementById('note-text').value = ''; // Clear textarea if no notes exist
    }
}

// Function to save notes for the selected guest
function saveNotes() {
    const guestNumber = localStorage.getItem('selectedGuest');
    const noteTextArea = document.getElementById('note-text');
    const notes = noteTextArea.value;
    localStorage.setItem(`notes_${guestNumber}, notes`); // Save notes to local storage
    alert('Notes saved!');
}

// Function to delete notes for the selected guest
function deleteNotes() {
    const guestNumber = localStorage.getItem('selectedGuest');
    localStorage.removeItem(`notes_${guestNumber}`); // Remove notes from local storage
    document.getElementById('note-text').value = ''; // Clear textarea
    alert('Notes deleted!');
}

// Function to go back to the selection screen
function goBack() {
    // Show the selection container and hide the notes container
    document.getElementById('selection-container').style.display = 'block';
    document.getElementById('note-container').style.display = 'none';
}

// Load notes when the page loads
window.onload = function() {
    const guestNumber = localStorage.getItem('selectedGuest');
    if (guestNumber) {
        loadGuestInfo();
        loadNotes(); // Load notes if a guest is already selected
    }
};