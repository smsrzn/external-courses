/* eslint-disable import/extensions */
import { displayData } from './displayData.js';
import { boards } from './loadData.js';

export function removeNewList() {
  this.removeEventListener('blur', removeNewList);
  if (this.value) {
    boards.unshift({ title: this.value, id: 0, issues: [] });
    displayData(boards);
    localStorage.setItem('kanbanBoard', JSON.stringify(boards));
  }

  this.parentNode.parentNode.remove();
}

export function createNewList() {
  const section = document.createElement('section');
  section.setAttribute('class', 'unit');
  document.querySelector('.kanban').insertBefore(section, document.querySelector('.kanban').firstChild);

  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  section.appendChild(header);

  const input = document.createElement('input');
  input.setAttribute('class', 'input');
  header.appendChild(input);

  const button = document.createElement('button');
  button.setAttribute('class', 'menu');
  header.appendChild(button);

  input.focus();
  input.addEventListener('blur', removeNewList);
}
