/* eslint-disable import/extensions */
import { load } from './script/loadData.js';
import { addTaskInBacklog } from './script/addTaskInBacklog.js';
import { addSelectInReady } from './script/addSelectInReady.js';
import { addSelectInProgress } from './script/addSelectInProgress.js';
import { addSelectInFinished } from './script/addSelectInFinished.js';
import { createSubUserMenu } from './script/createSubUserMenu.js';
import {
  usersMenu,
  buttonBacklogAdd,
  buttonReadyAdd,
  buttonProgressAdd,
  buttonFinishedAdd,
} from './script/const.js';

window.addEventListener('load', load());

usersMenu.addEventListener('click', createSubUserMenu);
buttonBacklogAdd.addEventListener('click', addTaskInBacklog);
buttonReadyAdd.addEventListener('click', addSelectInReady);
buttonProgressAdd.addEventListener('click', addSelectInProgress);
buttonFinishedAdd.addEventListener('click', addSelectInFinished);
