const tickets = document.querySelector('.tickets_list');

tickets.addEventListener('click', (e) => {
    const button = e.target.closest('.check-btn');

    if (button) {
        const ticket = button.closest('.ticket');
        const fullDescription = ticket.querySelector('.ticket__desc__full');
        if (button.querySelector('.fa-check')) {
            button.innerHTML = '';
            fullDescription.style.display = 'none';
        } else {
            button.innerHTML = '<i class="fa-solid fa-check"></i>'; 
            fullDescription.style.display = 'block';
        }
    }
});

const addButton = document.querySelector('.add-btn');
const popupAddTicket = document.querySelector('.popup-add-ticket');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});

const popupCancelButton = document.querySelector('.popup-btn__cancel');

popupCancelButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'none';
});