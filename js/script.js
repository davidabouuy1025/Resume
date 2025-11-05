// ===== Scroll Animation for Sections =====
window.addEventListener('scroll', revealSections);

function revealSections() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) sec.classList.add('visible');
  });
}

// ===== Contact Button Action =====
document.getElementById('contactBtn').addEventListener('click', () => {
  alert("You can reach me at:\n📞 +6019-3402828\n📧 myleejm23@gmail.com");
});

// ===== Job Button Action =====
document.getElementById('jobBtn').addEventListener('click', () => {
  window.open("job.html", "_blank");
});