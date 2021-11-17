/* eslint-disable import/extensions */
import { saveTaskInReady } from './saveTaskInReady.js';
import { boards } from './loadData.js';
import { buttonReadyAdd } from './const.js';

export function addSelectInReady() {
  if (document.getElementById('ready_select') === null && boards.backlog.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');

    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = 'ready_select';

    JSON.parse(localStorage.getItem('kanbanBoard')).backlog.forEach((el) => {
      const optionElement = new Option(el, el);

      optionElement.className = 'kanban_option';
      selectElement.addEventListener('change', saveTaskInReady);
      selectElement.append(optionElement);
    });

    const parentElement = document.getElementById('ready_footer');

    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    buttonReadyAdd.classList.add('disable');
  }
}
