/* eslint-disable import/extensions */
import { displayData } from './displayData.js';
import { boards } from './loadData.js';

export function saveTaskInFinished(eventKanbanUnit) {
  const select = eventKanbanUnit.target;
  const enteredText = select.value;

  boards.finished.push(enteredText);
  boards.progress.splice(select.selectedIndex - 1, 1);
  displayData(boards);
  localStorage.setItem('kanbanBoard', JSON.stringify(boards));
  select.remove();
}
