document.getElementById('show-signup').addEventListener('click', function() {
    document.querySelector('.login-container').style.left = '-100%';
    document.querySelector('.signup-container').style.left = '0';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.login-container').style.left = '0';
    document.querySelector('.signup-container').style.left = '100%';
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    var password = event.target.querySelector('input[type="password"]:nth-of-type(1)').value;
    var confirmPassword = event.target.querySelector('input[type="password"]:nth-of-type(2)').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match');
    }
});

