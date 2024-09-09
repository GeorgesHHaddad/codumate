document.addEventListener("DOMContentLoaded", function () {
    // Selecting DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navOverlay = document.querySelector('.nav-overlay');
    const closeMenu = document.querySelector('.close-menu');

    // Toggle the navigation menu on hamburger click
    hamburger.addEventListener('click', () => {
        navOverlay.classList.add('active');
    });

    // Close the menu when the close button is clicked
    closeMenu.addEventListener('click', () => {
        navOverlay.classList.remove('active');
    });

    // Close the menu on window resize if greater than 600px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            navOverlay.classList.remove('active'); // Close menu on resize
        }
    });

    // Contact form event listener
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }

    // JavaScript to detect if the user is on a mobile device
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    // If it's not a mobile device, show the desktop content
    if (!isMobileDevice()) {
        var elements = document.querySelectorAll(".desktop-content");
        elements.forEach(function (element) {
            element.style.display = "block";
        });
    }
});
