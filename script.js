// ===== Scroll Animation for Section Visibility =====
window.addEventListener('scroll', revealSections);

function revealSections() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) sec.classList.add('visible');
  });
}

// ===== Smooth Contact Button Action =====
document.getElementById('contactBtn').addEventListener('click', () => {
  alert("You can reach me at: \n📞 +6019-3402828\n📧 myleejm23@gmail.com");
});

// ===== Add Fade-in Animation Class =====
const style = document.createElement('style');
style.innerHTML = `
.section { opacity: 0; transform: translateY(50px); transition: 0.8s ease; }
.section.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
