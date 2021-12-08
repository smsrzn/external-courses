/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { boards } from './loadData.js';
import { displayData } from './displayData.js';

export function saveTaskInFirst(event, id) {
  const input = document.querySelector('.kanban_input');
  const button = document.getElementById(`${boards[id].title}_add`);
  const text = input.value;

  if (text === '') {
    input.remove();
    button.classList.remove('disable');
  } else {
    boards[id].issues.push(text);
    displayData(boards);
    localStorage.setItem('kanbanBoard', JSON.stringify(boards));
    input.remove();
    button.classList.remove('disable');
  }
}
