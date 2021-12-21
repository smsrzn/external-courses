/* eslint-disable import/extensions */
import { saveTaskInProgress } from './saveTaskInProgress.js';
import { boards } from './loadData.js';
import { buttonProgressAdd } from './const.js';

export function addSelectInProgress() {
  if (document.getElementById('progress_select') === null && boards.ready.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');

    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = 'progress_select';

    JSON.parse(localStorage.getItem('kanbanBoard')).ready.forEach((el) => {
      const optionElement = new Option(el, el);

      optionElement.className = 'kanban_option';
      selectElement.addEventListener('change', saveTaskInProgress);
      selectElement.append(optionElement);
    });

    const parentElement = document.getElementById('progress_footer');

    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    buttonProgressAdd.classList.add('disable');
  }
}
