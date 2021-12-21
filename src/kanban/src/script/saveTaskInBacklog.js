/* eslint-disable import/extensions */
import { displayData } from './displayData.js';
import { boards } from './loadData.js';

export function saveTaskInBacklog() {
  const input = document.querySelector('.kanban_input');
  const button = document.getElementById('backlog_add');
  const text = input.value;

  if (text === '') {
    input.remove();
    button.classList.remove('disable');
  } else {
    boards.backlog.push(text);
    displayData(boards);
    localStorage.setItem('kanbanBoard', JSON.stringify(boards));
    input.remove();
    button.classList.remove('disable');
  }
}
