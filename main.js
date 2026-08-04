document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 3000); //
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      element.classList.add("visible");
    }
  });
});
