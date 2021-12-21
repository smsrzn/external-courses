/* eslint-disable import/extensions */
import { buttonFinishedAdd } from './const.js';
import { boards } from './loadData.js';
import { saveTaskInFinished } from './saveTaskInFinished.js';

export function addSelectInFinished() {
  if (document.getElementById('finished_select') === null && boards.progress.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');

    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = 'finished_select';

    JSON.parse(localStorage.getItem('kanbanBoard')).progress.forEach((el) => {
      const optionElement = new Option(el, el);

      optionElement.className = 'kanban_option';
      selectElement.addEventListener('change', saveTaskInFinished);
      selectElement.append(optionElement);
    });

    const parentElement = document.getElementById('finished_footer');

    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    buttonFinishedAdd.classList.add('disable');
  }
}
