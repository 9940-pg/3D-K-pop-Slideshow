const cards = document.querySelectorAll('.card');

let current = 0;

function updateSlider() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === current) {
      card.classList.add('active');
    }
  });
}

updateSlider();

// Click on card should make clicked card active
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    current = index;  // <-- Yahan click ki hui card ka index set karo
    updateSlider();
  });
});