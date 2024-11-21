// Go back to the previous page (shows first page)
function goBack() {
    alert("Going back to the initial page (this is a placeholder function).");
    // You can implement the logic to show the initial page here
}

// Toggle show/hide password in the login form
function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

// Validate the login form (dummy validation)
function validateLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === 'admin' && password === 'password123') {
        alert('Logged in successfully!');
        window.location.href = 'home.html'
    } else {
        alert('Invalid credentials. Please try again.');
    }
}