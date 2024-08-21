const tickets = document.querySelector('.tickets-list');
const popupEditTicket = document.querySelector('.popup-edit');
const popupCancelButton = document.querySelector('.popup-edit-btn-cancel');
const popupOkButton = document.querySelector('.popup-edit-btn-ok');
const shortInput = document.querySelector('.short-input-edit');
const fullInput = document.querySelector('.full-input-edit');
let itemToChange = null;

tickets.addEventListener('click', (e) => {
    const editButton = e.target.closest('.edit-btn');

    if (editButton) {
        popupEditTicket.style.display = 'block';

        itemToChange = e.target.closest('.ticket-item');
        const shortInfo = itemToChange.querySelector('.ticket-summary');
        const fullInfo = itemToChange.querySelector('.ticket-details');
        shortInput.value = shortInfo.textContent;
        fullInput.value = fullInfo.textContent;

    }
});

popupOkButton.addEventListener('click', () => {
    const shortInfo = itemToChange.querySelector('.ticket-summary');
    const fullInfo = itemToChange.querySelector('.ticket-details');
        
    shortInfo.textContent = shortInput.value;
    fullInfo.textContent = fullInput.value;
    
    popupEditTicket.style.display = 'none';
});

popupCancelButton.addEventListener('click', () => {
    
    popupEditTicket.style.display = 'none';
});
