// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('open');
});

// Sign In
function handleSignIn() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;

    // Basic validation — your signin.css has no .invalid or .field-error styles
    // so just using native browser-style border flash via inline style
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.style.borderColor = 'rgba(255,100,100,0.6)';
        valid = false;
    } else {
        emailInput.style.borderColor = '';
    }

    if (!password) {
        passwordInput.style.borderColor = 'rgba(255,100,100,0.6)';
        valid = false;
    } else {
        passwordInput.style.borderColor = '';
    }

    if (!valid) return;

    const btn = document.querySelector('.submit-btn');
    btn.disabled = true;
    btn.textContent = 'Signing in...';

    // Replace with real auth call
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Clear red border on input
document.getElementById('email').addEventListener('input', function () {
    this.style.borderColor = '';
});
document.getElementById('password').addEventListener('input', function () {
    this.style.borderColor = '';
});

// OAuth stubs
document.querySelectorAll('.signin-btn1').forEach(btn => {
    btn.addEventListener('click', () => {
        const provider = btn.textContent.includes('Google') ? 'google' : 'github';
        console.log('OAuth sign in with:', provider);
        // Wire to your actual OAuth flow
    });
});