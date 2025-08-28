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

document.addEventListener('DOMContentLoaded', function() {
    const portfolioLink = document.querySelector('.portfolio-link');
    const popup = document.getElementById('portfolioPopup');
    const closeButton = document.querySelector('.popup-close');

    portfolioLink.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        popup.classList.remove('active');
    });

    // Close popup when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
    });
});
