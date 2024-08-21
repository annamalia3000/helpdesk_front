const tickets = document.querySelector('.tickets-list');

tickets.addEventListener('click', (e) => {
    const checkButton = e.target.closest('.check-btn');

    if (checkButton) {
        if (checkButton.querySelector('.fa-check')) {
            checkButton.innerHTML = '';
        } else {
            checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'; 
        }
    }
});