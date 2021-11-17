/* eslint-disable import/extensions */
import { boardsMocks } from './const.js';
// eslint-disable-next-line import/no-cycle
import { displayData } from './displayData.js';

// eslint-disable-next-line import/no-mutable-exports
export let boards;

export function load() {
  if (JSON.parse(localStorage.getItem('kanbanBoard')) === null) {
    localStorage.setItem('kanbanBoard', JSON.stringify(boardsMocks));
  }
  boards = JSON.parse(localStorage.getItem('kanbanBoard'));
  displayData(boards);
}
