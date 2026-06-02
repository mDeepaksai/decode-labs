// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('open');
});

// Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.productcard');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search
document.querySelector('.searchbar input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Reset filter buttons to 'all' when searching
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');

    cards.forEach(card => {
        const title = card.querySelector('.productcard-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();
        const tagline = card.querySelector('.card-tagline').textContent.toLowerCase();

        if (title.includes(query) || desc.includes(query) || tagline.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    // If search cleared, restore active filter
    if (query === '') {
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        cards.forEach(card => {
            card.style.display = activeCategory === 'all' || card.dataset.category === activeCategory ? 'flex' : 'none';
        });
    }
});