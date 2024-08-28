const tickets = document.querySelector('.tickets-list');
const popupDelTicket = document.querySelector('.popup-delete');
const cancelDelBtn = document.querySelector('.popup-delete-btn-cancel');
const okDelBtn = document.querySelector('.popup-delete-btn-ok');
let itemToRemove = null;
const baseUrl = 'http://localhost:7070/api';

tickets.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('.delete-btn');

    if (deleteButton) {
        itemToRemove = e.target.closest('.ticket-item');
        popupDelTicket.style.display = 'block';
    }
});

cancelDelBtn.addEventListener('click', () => {
    popupDelTicket.style.display = 'none';
    itemToRemove = null;
});

okDelBtn.addEventListener('click', async () => {
    try {
        const id = itemToRemove.dataset.id;
        const response = await fetch(`${baseUrl}?method=deleteById&id=${id}`, {
            method: 'DELETE'
        });

        itemToRemove.remove();
        itemToRemove = null;
        popupDelTicket.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
});
