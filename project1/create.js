// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('open');
});

// Toggle password visibility
function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Password strength
function updateStrength(val) {
    const segs = [1, 2, 3, 4].map(n => document.getElementById('seg' + n));
    const label = document.getElementById('strength-label');
    const colors = ['#ff4d4d', '#ff9900', '#f0c040', '#4caf50'];
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];

    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    segs.forEach((seg, i) => {
        seg.style.background = i < score ? colors[score - 1] : 'rgba(255,255,255,0.08)';
    });

    label.textContent = val.length === 0 ? '' : labels[score - 1] || 'Weak';
    label.style.color = val.length === 0 ? '' : colors[score - 1];
}

// Clear error on input
function clearErr(errId, input) {
    document.getElementById(errId).textContent = '';
    input.classList.remove('invalid');
}

// Validation
function handleRegister() {
    let valid = true;

    const firstName = document.getElementById('first-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm-password');
    const terms = document.getElementById('terms');

    // First name
    if (!firstName.value.trim()) {
        document.getElementById('err-first').textContent = 'First name is required.';
        firstName.classList.add('invalid');
        valid = false;
    }

    // Email
    const emailVal = email.value.trim();
    if (!emailVal) {
        document.getElementById('err-email').textContent = 'Email is required.';
        email.classList.add('invalid');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        document.getElementById('err-email').textContent = 'Enter a valid email.';
        email.classList.add('invalid');
        valid = false;
    }

    // Password
    if (!password.value) {
        document.getElementById('err-password').textContent = 'Password is required.';
        password.classList.add('invalid');
        valid = false;
    } else if (password.value.length < 8) {
        document.getElementById('err-password').textContent = 'Minimum 8 characters.';
        password.classList.add('invalid');
        valid = false;
    }

    // Confirm
    if (confirm.value !== password.value) {
        document.getElementById('err-confirm').textContent = 'Passwords do not match.';
        confirm.classList.add('invalid');
        valid = false;
    }

    // Terms
    if (!terms.checked) {
        document.getElementById('err-terms').textContent = 'You must agree to the terms.';
        valid = false;
    }

    if (!valid) return;

    // Disable button to prevent double submit
    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating...';

    // Simulate async (replace with real API call)
    setTimeout(() => {
        document.getElementById('form-view').style.display = 'none';
        document.getElementById('success-view').classList.add('show');
    }, 1200);
}

// OAuth stub
function oauthSignup(provider) {
    console.log('OAuth signup with:', provider);
    // Wire up to your actual OAuth flow
}