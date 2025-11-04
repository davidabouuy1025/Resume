// ===== Select all buttons and cards =====
const buttons = document.querySelectorAll(".nav-btn");
const cards = document.querySelectorAll(".card");

// ===== Handle Section Switching =====
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    // Hide all sections
    cards.forEach(card => card.classList.remove("show"));

    // Show target section
    document.getElementById(target).classList.add("show");
  });
});

// ===== Download Resume =====
document.getElementById("downloadBtn").addEventListener("click", () => {
  // You can replace the link with your actual PDF path later
  const link = document.createElement("a");
  link.href = "resume.pdf"; // Put your resume file name here
  link.download = "JunMing_Resume.pdf";
  link.click();
});
