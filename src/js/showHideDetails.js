const tickets = document.querySelector('.tickets-list');

tickets.addEventListener('click', (e) => {
    const checkButton = e.target.closest('.check-btn');

    if (checkButton) {
        const ticket = checkButton.closest('.ticket-item');
        const fullDescription = ticket.querySelector('.ticket-details');
        if (checkButton.querySelector('.fa-check')) {
            checkButton.innerHTML = '';
            fullDescription.style.display = 'none';
        } else {
            checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'; 
            fullDescription.style.display = 'block';
        }
    }
});