const tickets = document.querySelector('.tickets-list');

tickets.addEventListener('click', (e) => {
    // Проверяем, что клик был по .ticket-item, но не по кнопкам внутри него
    const ticket = e.target.closest('.ticket-item');
    const isButtonClick = e.target.closest('.check-btn') || e.target.closest('.edit-btn') || e.target.closest('.delete-btn');

    if (ticket && !isButtonClick) {
        const fullDescription = ticket.querySelector('.ticket-details');
        
        // Переключаем отображение деталей тикета
        if (fullDescription.style.display === 'block') {
            fullDescription.style.display = 'none';
        } else {
            fullDescription.style.display = 'block';
        }
    }
});