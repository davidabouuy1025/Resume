// Smoothly scroll to section when button clicked
const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = document.getElementById(btn.dataset.target);
    target.scrollIntoView({ behavior: "smooth" }); // ✅ Smooth scrolling
  });
});

// Add scroll animation when sections appear
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
});
  
// Resume download button
document.getElementById('downloadBtn').addEventListener('click', () => {
  window.open('files/Resume.pdf', '_blank');
});
