// script.js

// Smooth Navigation
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

// Form Handling
const handleFormSubmit = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        // Handle form data here
    });
};

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        threshold: 0.1
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    elements.forEach((element) => observer.observe(element));
};

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});