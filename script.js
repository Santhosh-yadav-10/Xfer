document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation (replace with real authentication logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Redirect to the text page
        window.location.href = 'textpage.html';
    } else {
        alert('Please enter valid credentials');
    }
});