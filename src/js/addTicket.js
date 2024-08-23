import { createTicketElement } from './createTicketElement';

const addButton = document.querySelector('.add-btn');
const popupAddTicket = document.querySelector('.popup-add');
const cancelAddButton = document.querySelector('.popup-add-btn-cancel');
const okAddButton = document.querySelector('.popup-add-btn-ok');

const shortDescriptionInput = document.querySelector('.short-input-add');
const fullDescriptionInput = document.querySelector('.full-input-add');

addButton.addEventListener('click', () => {
    popupAddTicket.style.display = 'block';
});

okAddButton.addEventListener('click', async () => {
    const shortDescription = shortDescriptionInput.value;
    const fullDescription = fullDescriptionInput.value;

    try {
        const response = await fetch('http://localhost:7070/api?method=createTicket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: shortDescription,
                description: fullDescription,
                status: false
            })
        });

        const newTicket = await response.json();

        const ticketsContainer = document.querySelector('.tickets-list');
        const newTicketElement = createTicketElement(newTicket);
        ticketsContainer.appendChild(newTicketElement);

        shortDescriptionInput.value = '';
        fullDescriptionInput.value = '';
        popupAddTicket.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
});

cancelAddButton.addEventListener('click', () => {
    shortDescriptionInput.value = '';
    fullDescriptionInput.value = '';

    popupAddTicket.style.display = 'none';
});
