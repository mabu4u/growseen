function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // close menu on mobile after click
    document.getElementById("navLinks").classList.remove("show");
  });
});
