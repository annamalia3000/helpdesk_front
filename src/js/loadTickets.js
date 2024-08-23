import { showLoadingIndicator, hideLoadingIndicator } from './indicator';
import { createTicketElement } from './createTicketElement';

export async function loadTickets() {
    showLoadingIndicator();
    try {
        const response = await fetch('http://localhost:7070/api?method=allTickets');
        if (!response.ok) throw new Error('Ошибка загрузки тикетов');
        const tickets = await response.json();
        
        const ticketsContainer = document.querySelector('.tickets-list');
        ticketsContainer.innerHTML = ''; 

        tickets.forEach(ticket => {
            const ticketElement = createTicketElement(ticket);
            ticketsContainer.appendChild(ticketElement);
        });
    } catch (error) {
        console.error(error);
    } finally {
        hideLoadingIndicator(); 
    }
}