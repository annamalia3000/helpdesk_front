const tickets = document.querySelector('.tickets_list');

tickets.addEventListener('click', (e) => {
    const button = e.target.closest('.check-btn');

    if (button) {
        const ticket = button.closest('.ticket');
        const fullDescription = ticket.querySelector('.ticket-desc-full');
        if (button.querySelector('.fa-check')) {
            button.innerHTML = '';
            fullDescription.style.display = 'none';
        } else {
            button.innerHTML = '<i class="fa-solid fa-check"></i>'; 
            fullDescription.style.display = 'block';
        }
    }
});
