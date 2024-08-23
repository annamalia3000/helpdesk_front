const tickets = document.querySelector('.tickets-list');

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
            const response = await fetch(`http://localhost:7070/api?method=updateById&id=${ticketId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (!response.ok) {
                throw new Error('Ошибка обновления статуса тикета');
            }
        } catch (error) {
            console.error('Ошибка при обновлении статуса тикета:', error);
        }
    }
});
