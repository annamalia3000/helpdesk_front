import { createTicket } from './createTicket';

const addButton = document.querySelector('.add-btn');
const popupAddTicket = document.querySelector('.popup-add');
const popupCancelButton = document.querySelector('.popup-add-btn-cancel');
const popupCancelOk = document.querySelector('.popup-add-btn-ok');

// Получаем элементы input/textarea, а не их значения сразу
const shortDescriptionInput = document.querySelector('.short-input-add');
const fullDescriptionInput = document.querySelector('.full-input-add');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});

popupCancelOk.addEventListener('click', () => {
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
