/* eslint-disable import/extensions */
import { displayData } from './displayData.js';
import { boards } from './loadData.js';

export function saveTaskInReady(eventKanbanUnit) {
  const select = eventKanbanUnit.target;
  const enteredText = select.value;

  boards.ready.push(enteredText);
  boards.backlog.splice(select.selectedIndex - 1, 1);
  displayData(boards);
  localStorage.setItem('kanbanBoard', JSON.stringify(boards));
  select.remove();
}
