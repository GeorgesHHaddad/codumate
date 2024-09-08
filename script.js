document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});


document.addEventListener("DOMContentLoaded", function() {
    // Trigger animation when the page is fully loaded
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    fadeInElements.forEach((el) => {
        el.style.opacity = 1;
        el.style.animation = 'fadeIn 1s ease-out';
    });

    slideInElements.forEach((el) => {
        el.style.opacity = 1;
        el.style.animation = 'slideIn 1s ease-out';
    });
});
