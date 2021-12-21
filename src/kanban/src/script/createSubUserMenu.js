// eslint-disable-next-line import/extensions
import { usersMenu } from './const.js';

export function createSubUserMenu() {
  if (!document.querySelector('.userSubMenu')) {
    const ul = document.createElement('ul');

    ul.className = 'userSubMenu';
    usersMenu.append(ul);
    usersMenu.classList.toggle('active');

    for (let i = 0; i < 3; i += 1) {
      ul.append(document.createElement('li'));
    }

    const subItems = ul.children;

    subItems[0].innerHTML = "<a href = '#'>My account</a>";
    subItems[1].innerHTML = "<a href = '#'>My task</a>";
    subItems[2].innerHTML = "<a href = '#'>Log out</a>";
  } else {
    document.querySelector('.userSubMenu').remove();
    usersMenu.classList.toggle('active').remove();
  }
}
