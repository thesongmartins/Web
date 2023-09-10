// JavaScript (script.js)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission (you can customize this further)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // You can add code here to handle form submission, e.g., sending an email.
    // For demonstration purposes, we'll just display an alert.
    alert('Form submitted successfully!');
});
