const tickets = document.querySelector('.tickets-list');

tickets.addEventListener('click', async (e) => {
    const ticket = e.target.closest('.ticket-item');
    const isButtonClick = e.target.closest('.status-btn') || e.target.closest('.edit-btn') || e.target.closest('.delete-btn');

    if (ticket && !isButtonClick) {
        const ticketDescription = ticket.querySelector('.ticket-description');

        if (ticketDescription.style.display === 'block') {
            ticketDescription.style.display = 'none';
        } else {
            ticketDescription.style.display = 'block';
        }
    }
});

