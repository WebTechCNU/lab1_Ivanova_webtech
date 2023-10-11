const openContactModalButton = document.getElementById('openContactModal');
const closeContactModalButton = document.getElementById('closeContactModal');
const contactModal = document.getElementById('contactModal');

openContactModalButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

closeContactModalButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// JavaScript to handle form submission (you can add your own logic)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can add your own logic to handle form submission here
    // For example, sending form data to a server or displaying a thank you message
});