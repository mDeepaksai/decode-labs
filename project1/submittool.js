// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('open');
});

// Logo preview
function previewLogo(event) {
    const file = event.target.files[0];
    if (!file) return;
    const preview = document.getElementById('logo-preview');
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.innerHTML = `<img src="${e.target.result}" alt="Logo preview">`;
    };
    reader.readAsDataURL(file);
}

// Pricing chips (single select)
document.querySelectorAll('#pricing-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('#pricing-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    });
});

// Validation helper
function setInvalid(inputEl) {
    inputEl.style.borderColor = 'rgba(255,100,100,0.6)';
    inputEl.style.boxShadow = '0 0 0 3px rgba(255,100,100,0.08)';
}

function clearInvalid(inputEl) {
    inputEl.style.borderColor = '';
    inputEl.style.boxShadow = '';
}

// Clear on input
['tool-name', 'tool-url', 'tool-category', 'tool-tagline', 'tool-desc', 'submitter-email'].forEach(id => {
    document.getElementById(id).addEventListener('input', function () {
        clearInvalid(this);
    });
});

// Submit
function handleSubmit() {
    const name     = document.getElementById('tool-name');
    const url      = document.getElementById('tool-url');
    const category = document.getElementById('tool-category');
    const tagline  = document.getElementById('tool-tagline');
    const desc     = document.getElementById('tool-desc');
    const email    = document.getElementById('submitter-email');
    const pricing  = document.querySelector('#pricing-chips .chip.active');

    let valid = true;

    if (!name.value.trim()) { setInvalid(name); valid = false; }
    if (!url.value.trim() || !/^https?:\/\/.+\..+/.test(url.value.trim())) { setInvalid(url); valid = false; }
    if (!category.value) { setInvalid(category); valid = false; }
    if (!tagline.value.trim()) { setInvalid(tagline); valid = false; }
    if (!desc.value.trim()) { setInvalid(desc); valid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setInvalid(email); valid = false; }

    if (!pricing) {
        document.getElementById('pricing-chips').style.outline = '1px solid rgba(255,100,100,0.4)';
        document.getElementById('pricing-chips').style.borderRadius = '8px';
        valid = false;
    } else {
        document.getElementById('pricing-chips').style.outline = '';
    }

    if (!valid) return;

    const btn = document.querySelector('.submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

    // Replace with real API call
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit for Review';

        const banner = document.getElementById('success-banner');
        banner.classList.add('show');
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Reset form
        ['tool-name', 'tool-url', 'tool-tagline', 'tool-desc', 'submitter-name', 'submitter-email'].forEach(id => {
            document.getElementById(id).value = '';
        });
        document.getElementById('tool-category').value = '';
        document.querySelectorAll('#pricing-chips .chip').forEach(c => c.classList.remove('active'));
        document.getElementById('logo-preview').innerHTML = '<i class="fa-solid fa-image"></i>';
    }, 1200);
}