/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/extensions
import { deleteList } from './deleteList.js';

export function addContextMenu(e, obj) {
  if (!document.querySelector('.context') && e.currentTarget.id.slice(0, -5) === obj.title) {
    const ul = document.createElement('ul');
    const menu = document.getElementById(`${obj.title}_menu`);
    menu.appendChild(ul);

    ul.className = 'context';
    menu.append(ul);
    menu.classList.add('active');

    ul.append(document.createElement('li'));

    const subItems = ul.children;

    subItems[0].innerHTML = "<a href = '#'>Delete list</a>";

    subItems[0].addEventListener('click', (event) => deleteList(event, obj));
  } else {
    document.querySelector('.context').remove();
  }
}
