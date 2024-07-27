document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event-card');
    
    events.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    console.log('Message:', message);
    document.getElementById('message').value = '';
    alert('Thank you for your message! We will get back to you soon...');
});
