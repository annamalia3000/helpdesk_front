const ticketsContainer = document.querySelector('.tickets-list');
const popupEdit = document.querySelector('.popup-edit');
const cancelEditButton = document.querySelector('.popup-edit-btn-cancel');
const okEditButton = document.querySelector('.popup-edit-btn-ok');
const nameInput = document.querySelector('.short-input-edit');
const descriptionInput = document.querySelector('.full-input-edit');
let ticketToEdit = null;
const baseUrl = 'http://localhost:7070/api';

ticketsContainer.addEventListener('click', (e) => {
    const editButton = e.target.closest('.edit-btn');

    if (editButton) {
        popupEdit.style.display = 'block';

        ticketToEdit = e.target.closest('.ticket-item');
        const ticketNameElement = ticketToEdit.querySelector('.ticket-name');
        const ticketDescriptionElement = ticketToEdit.querySelector('.ticket-description');
        
        nameInput.value = ticketNameElement.textContent;
        descriptionInput.value = ticketDescriptionElement.textContent;
    }
});

okEditButton.addEventListener('click', async () => {
    const updatedName = nameInput.value;
    const updatedDescription = descriptionInput.value;

    const ticketNameElement = ticketToEdit.querySelector('.ticket-name');
    const ticketDescriptionElement = ticketToEdit.querySelector('.ticket-description');
    ticketNameElement.textContent = nameInput.value;
    ticketDescriptionElement.textContent = descriptionInput.value;

    try {
        const id = ticketToEdit.dataset.id;
        const response = await fetch(`${baseUrl}?method=updateById&id=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: updatedName,
                description: updatedDescription,
            })
        });

        popupEdit.style.display = 'none';
    } catch (error) {
        console.error(error); 
    }
});

cancelEditButton.addEventListener('click', () => {
    popupEdit.style.display = 'none';
});
