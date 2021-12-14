/* eslint-disable import/extensions */
import { buttonReadyAdd, buttonProgressAdd, buttonFinishedAdd } from './const.js';
// eslint-disable-next-line import/no-cycle
import { boards } from './loadData.js';

export function displayData(obj) {
  document.querySelectorAll('.kanban_item').forEach((item) => {
    item.remove();
  });

  Object.keys(obj).forEach((key) => {
    obj[key].forEach((title) => {
      const item = document.createElement('li');

      item.className = 'kanban_item';
      item.textContent = title;
      document.getElementById(key).append(item);
    });

    if (key === 'ready') {
      if (boards.backlog.length === 0) {
        buttonReadyAdd.classList.add('disable');
      } else {
        buttonReadyAdd.classList.remove('disable');
      }
    }

    if (key === 'progress') {
      if (boards.ready.length === 0) {
        buttonProgressAdd.classList.add('disable');
      } else {
        buttonProgressAdd.classList.remove('disable');
      }
    }

    if (key === 'finished') {
      if (boards.progress.length === 0) {
        buttonFinishedAdd.classList.add('disable');
      } else {
        buttonFinishedAdd.classList.remove('disable');
      }
    }
  });
}
