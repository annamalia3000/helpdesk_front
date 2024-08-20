const addButton = document.querySelector('.add-btn');
const popupAddTicket = document.querySelector('.popup-add');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});

const popupCancelButton = document.querySelector('.popup-add-btn-cancel');

popupCancelButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'none';
});
