const tickets = document.querySelector('.tickets-list');
// Полное описание - показать и скрыть
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
//Добавить тикет - показать
const addButton = document.querySelector('.add-btn');
const popupAddTicket = document.querySelector('.popup-add');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});
//Добавить тикет - скрыть
const popupCancelButton = document.querySelector('.popup-add-btn-cancel');

popupCancelButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'none';
});

//Исправить тикет -  показать
const popupEditTicket = document.querySelector('.popup-edit');
tickets.addEventListener('click', (e) => {
    const editButton = e.target.closest('.edit-btn');

    if (editButton) {
        popupEditTicket.style.display = 'none';
    }
});
