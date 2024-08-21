import { createTicket } from './createTicket';

const addButton = document.querySelector('.add-btn');
const popupAddTicket = document.querySelector('.popup-add');
const popupCancelButton = document.querySelector('.popup-add-btn-cancel');
const popupOkButton = document.querySelector('.popup-add-btn-ok');

const shortDescriptionInput = document.querySelector('.short-input-add');
const fullDescriptionInput = document.querySelector('.full-input-add');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});

popupOkButton.addEventListener('click', () => {
    const shortDescription = shortDescriptionInput.value;
    const fullDescription = fullDescriptionInput.value;

    createTicket(shortDescription, fullDescription);

    shortDescriptionInput.value = '';
    fullDescriptionInput.value = '';

    popupAddTicket.style.display = 'none';
});

popupCancelButton.addEventListener('click', () => {
    shortDescriptionInput.value = '';
    fullDescriptionInput.value = '';

    popupAddTicket.style.display = 'none';
});
