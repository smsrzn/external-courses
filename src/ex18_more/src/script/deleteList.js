/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { displayData } from './displayData.js';
import { boards } from './loadData.js';

export function deleteList(e, obj) {
  boards.splice(obj.id, 1);
  displayData(boards);
  localStorage.setItem('kanbanBoard', JSON.stringify(boards));
}
