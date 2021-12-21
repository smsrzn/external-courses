/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { saveTaskInOther } from './saveTaskInOther.js';
import { boards } from './loadData.js';

export function addOther(e, id) {
  if (document.getElementById(`${boards[id].title}_select`) === null && boards[id - 1].issues.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');

    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = `${boards[id].title}_select`;

    JSON.parse(localStorage.getItem('kanbanBoard'))[id - 1].issues.forEach((el) => {
      const optionElement = new Option(el, el);

      optionElement.className = 'kanban_option';
      selectElement.append(optionElement);
    });

    selectElement.addEventListener('change', (eventKanbanUnit) => saveTaskInOther(eventKanbanUnit, id));
    const parentElement = document.getElementById(`${boards[id].title}_footer`);

    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    document.getElementById(`${boards[id].title}_add`).classList.add('disable');
  }
}
