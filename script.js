const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

/* ===== ACTIVE LINK ON SCROLL ===== */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
