document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});


// JavaScript to detect if the user is on a mobile device
document.addEventListener("DOMContentLoaded", function () {
    // Detect if the device is mobile
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    // If it's not a mobile device, show the desktop content
    if (!isMobileDevice()) {
        var elements = document.querySelectorAll(".desktop-content");
        elements.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
