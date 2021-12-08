/* eslint-disable import/extensions */
import { load } from './script/loadData.js';
import { createSubUserMenu } from './script/createSubUserMenu.js';
import { createNewList } from './script/createNewList.js';
import {
  usersMenu,
  buttonCreateNewList,
} from './script/const.js';

window.addEventListener('load', load());
usersMenu.addEventListener('click', createSubUserMenu);
buttonCreateNewList.addEventListener('click', createNewList);
