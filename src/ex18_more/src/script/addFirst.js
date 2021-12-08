/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { saveTaskInFirst } from './saveTaskInFirst.js';
import { boards } from './loadData.js';

export function addFirst(e, id) {
  if (document.querySelector('.kanban_input') === null) {
    const input = document.createElement('input');

    input.setAttribute('class', 'kanban_input');
    input.addEventListener('blur', (event) => saveTaskInFirst(event, id));
    const parentElement = document.getElementById(`${boards[id].title}_footer`);

    parentElement.insertBefore(input, parentElement.firstElementChild);
    document.getElementById(`${boards[id].title}_add`).classList.add('disable');
    document.querySelector('.kanban_input').focus();
  }
}
