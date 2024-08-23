export function createTicketElement(ticket) {
    const newItem = document.createElement('div');
    newItem.classList.add('ticket-item');
    newItem.dataset.id = ticket.id;

    const newCheckBtn = document.createElement('button');
    newCheckBtn.classList.add('status-btn');
    if (ticket.status) {
        newCheckBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    }

    const newTicketInfo = document.createElement('div');
    newTicketInfo.classList.add('ticket-info');

    const newTicketInfoName = document.createElement('div');
    newTicketInfoName.classList.add('ticket-name');
    newTicketInfoName.textContent = ticket.name;

    const newTicketInfoDetails = document.createElement('div');
    newTicketInfoDetails.classList.add('ticket-description');
    newTicketInfoDetails.textContent = ticket.description;

    newTicketInfo.appendChild(newTicketInfoName);
    newTicketInfo.appendChild(newTicketInfoDetails);

    const newTicketData = document.createElement('div');
    newTicketData.classList.add('ticket-created');
    newTicketData.textContent = new Date(ticket.created).toLocaleString('ru-RU', {
        day: '2-digit', 
        month: '2-digit', 
        year: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit'
    });

    const newTicketBtns = document.createElement('div');
    newTicketBtns.classList.add('ticket-buttons');

    const newEditBtn = document.createElement('button');
    newEditBtn.classList.add('edit-btn');
    newEditBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('delete-btn');
    newDeleteBtn.innerHTML = 'X';

    newTicketBtns.appendChild(newEditBtn);
    newTicketBtns.appendChild(newDeleteBtn);

    newItem.appendChild(newCheckBtn);
    newItem.appendChild(newTicketInfo);
    newItem.appendChild(newTicketData);
    newItem.appendChild(newTicketBtns);

    return newItem;
}
