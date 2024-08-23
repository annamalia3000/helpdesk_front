/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 526:
/***/ (() => {

const tickets = document.querySelector('.tickets-list');
const popupDelTicket = document.querySelector('.popup-delete');
const cancelDelBtn = document.querySelector('.popup-delete-btn-cancel');
const okDelBtn = document.querySelector('.popup-delete-btn-ok');
let itemToRemove = null;
tickets.addEventListener('click', e => {
  const deleteButton = e.target.closest('.delete-btn');
  if (deleteButton) {
    itemToRemove = e.target.closest('.ticket-item');
    popupDelTicket.style.display = 'block';
  }
});
cancelDelBtn.addEventListener('click', () => {
  popupDelTicket.style.display = 'none';
  itemToRemove = null;
});
okDelBtn.addEventListener('click', async () => {
  try {
    const id = itemToRemove.dataset.id;
    const response = await fetch(`http://localhost:7070/api?method=deleteById&id=${id}`, {
      method: 'DELETE'
    });
    itemToRemove.remove();
    itemToRemove = null;
    popupDelTicket.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
});

/***/ }),

/***/ 513:
/***/ (() => {

const tickets = document.querySelector('.tickets-list');
tickets.addEventListener('click', async e => {
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
        body: JSON.stringify({
          status: newStatus
        })
      });
    } catch (error) {
      console.error(error);
    }
  }
});

/***/ }),

/***/ 485:
/***/ (() => {

const ticketsContainer = document.querySelector('.tickets-list');
const popupEdit = document.querySelector('.popup-edit');
const cancelEditButton = document.querySelector('.popup-edit-btn-cancel');
const okEditButton = document.querySelector('.popup-edit-btn-ok');
const nameInput = document.querySelector('.short-input-edit');
const descriptionInput = document.querySelector('.full-input-edit');
let ticketToEdit = null;
ticketsContainer.addEventListener('click', e => {
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
    const response = await fetch(`http://localhost:7070/api?method=updateById&id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: updatedName,
        description: updatedDescription
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

/***/ }),

/***/ 876:
/***/ (() => {

const tickets = document.querySelector('.tickets-list');
tickets.addEventListener('click', async e => {
  const ticket = e.target.closest('.ticket-item');
  const isButtonClick = e.target.closest('.status-btn') || e.target.closest('.edit-btn') || e.target.closest('.delete-btn');
  if (ticket && !isButtonClick) {
    const ticketDescription = ticket.querySelector('.ticket-description');
    if (ticketDescription.style.display === 'block') {
      ticketDescription.style.display = 'none';
    } else {
      ticketDescription.style.display = 'block';
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/showHideDetails.js
var showHideDetails = __webpack_require__(876);
;// CONCATENATED MODULE: ./src/js/createTicketElement.js
function createTicketElement(ticket) {
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
;// CONCATENATED MODULE: ./src/js/addTicket.js

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
        'Content-Type': 'application/json'
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
// EXTERNAL MODULE: ./src/js/editTicket.js
var editTicket = __webpack_require__(485);
// EXTERNAL MODULE: ./src/js/deleteTicket.js
var deleteTicket = __webpack_require__(526);
// EXTERNAL MODULE: ./src/js/doneTicket.js
var doneTicket = __webpack_require__(513);
;// CONCATENATED MODULE: ./src/js/indicator.js
function showLoadingIndicator() {
  document.getElementById('loading-indicator').style.display = 'block';
}
function hideLoadingIndicator() {
  document.getElementById('loading-indicator').style.display = 'none';
}
;// CONCATENATED MODULE: ./src/js/loadTickets.js


async function loadTickets() {
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
;// CONCATENATED MODULE: ./src/js/app.js






loadTickets();
;// CONCATENATED MODULE: ./src/index.js


})();

/******/ })()
;
//# sourceMappingURL=main.js.map