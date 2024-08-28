const tickets = document.querySelector('.tickets-list');
const baseUrl = 'http://localhost:7070/api';

tickets.addEventListener('click', async (e) => {
    const checkButton = e.target.closest('.status-btn');
    const ticketItem = e.target.closest('.ticket-item');

    if (checkButton && ticketItem) {
        const ticketId = ticketItem.dataset.id;
        let newStatus;

        if (checkButton.querySelector('.fa-check')) {
            checkButton.innerHTML = ''; 
            newStatus = false; 
        } else {
            checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'; 
            newStatus = true; 
        }

        try {
            const response = await fetch(`${baseUrl}?method=updateById&id=${ticketId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });

        } catch (error) {
            console.error(error);
        }
    }
});
