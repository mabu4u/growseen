document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have a hash (#) in their href
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop - 80, // Subtract 80px to account for the fixed navbar
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            }
        });
    });
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

