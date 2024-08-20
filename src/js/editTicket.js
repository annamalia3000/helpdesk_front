const tickets = document.querySelector('.tickets-list');
const popupEditTicket = document.querySelector('.popup-edit');

tickets.addEventListener('click', (e) => {
    const editButton = e.target.closest('.edit-btn');

    if (editButton) {
        popupEditTicket.style.display = 'block';
    }
});
