// eslint-disable-next-line import/extensions
import { saveTaskInBacklog } from './saveTaskInBacklog.js';

export function addTaskInBacklog() {
  if (document.querySelector('.kanban_input') === null) {
    const input = document.createElement('input');

    input.setAttribute('class', 'kanban_input');
    input.addEventListener('blur', saveTaskInBacklog);
    const parentElement = document.getElementById('backlog_footer');

    parentElement.insertBefore(input, parentElement.firstElementChild);
    document.getElementById('backlog_add').classList.add('disable');
    document.querySelector('.kanban_input').focus();
  }
}
