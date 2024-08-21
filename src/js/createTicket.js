export function createTicket(shortDescription, fullDescription) {
    const tickets = document.querySelector('.tickets-list');
    const newItem = document.createElement('div');
    newItem.classList.add('ticket-item');

    const newCheckBtn = document.createElement('button');
    newCheckBtn.classList.add('check-btn');

    const newTicketInfo = document.createElement('div');
    newTicketInfo.classList.add('ticket-info');

    const newTicketInfoSum = document.createElement('div');
    newTicketInfoSum.classList.add('ticket-summary');
    newTicketInfoSum.textContent = `${shortDescription}`;

    const newTicketInfoDetails = document.createElement('div');
    newTicketInfoDetails.classList.add('ticket-details');
    newTicketInfoDetails.textContent = `${fullDescription}`;

    newTicketInfo.appendChild(newTicketInfoSum);
    newTicketInfo.appendChild(newTicketInfoDetails);

    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getFullYear()).slice(-2)} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newTicketData = document.createElement('div');
    newTicketData.classList.add('ticket-data');
    newTicketData.innerHTML = formattedDate;

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

    tickets.insertAdjacentElement('beforeend', newItem);

}
