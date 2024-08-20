const tickets = document.querySelector('.tickets_list');
// Полное описание - показать и скрыть
tickets.addEventListener('click', (e) => {
    const checkButton = e.target.closest('.check-btn');

    if (checkButton) {
        const ticket = checkButton.closest('.ticket');
        const fullDescription = ticket.querySelector('.ticket__desc__full');
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
const popupAddTicket = document.querySelector('.popup-add-ticket');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});
//Добавить тикет - скрыть
const popupCancelButton = document.querySelector('.popup-add-ticket__btn-cancel');

popupCancelButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'none';
});

//Исправить тикет -  показать
const popupEditTicket = document.querySelector('.popup-edit-ticket');
tickets.addEventListener('click', (e) => {
    const editButton = e.target.closest('.edit-btn');

    if (editButton) {
        popupEditTicket.style.display = 'none';
    }
});
