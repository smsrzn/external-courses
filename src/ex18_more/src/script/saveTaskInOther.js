/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { boards } from './loadData.js';
import { displayData } from './displayData.js';

export function saveTaskInOther(eventKanbanUnit, id) {
  const select = eventKanbanUnit.target;
  const enteredText = select.value;

  boards[id].issues.push(enteredText);
  boards[id - 1].issues.splice(select.selectedIndex - 1, 1);
  displayData(boards);
  localStorage.setItem('kanbanBoard', JSON.stringify(boards));
  select.remove();
}
