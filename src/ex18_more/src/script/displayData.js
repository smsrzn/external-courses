/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { addFirst } from './addFirst.js';
import { addOther } from './addOther.js';
import { addContextMenu } from './addContextMenu.js';
import { boards } from './loadData.js';

export function displayData(obj) {
  let activeTasks = 0;
  let finishedTasks = 0;

  if (obj.length === 0 && !document.querySelector('.massage')) {
    const massage = document.createElement('div');
    massage.setAttribute('class', 'massage');
    massage.innerHTML = 'You do not have active task lists, to create use the Create new list function';
    document.querySelector('.kanban').appendChild(massage);
  } else if (obj.length !== 0 && document.querySelector('.massage')) {
    document.querySelector('.massage').remove();
  }

  document.querySelectorAll('.unit').forEach((item) => {
    item.remove();
  });

  Object.keys(obj).forEach((key) => {
    const section = document.createElement('section');
    section.setAttribute('class', 'unit');
    section.setAttribute('id', `unit_${obj[key].id}`);
    document
      .querySelector('.kanban')
      .insertBefore(section, document.querySelector('.kanban').lastChild);

    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    section.appendChild(header);

    const title = document.createElement('h2');
    title.setAttribute('class', 'title');
    title.innerHTML = obj[key].title;
    header.appendChild(title);

    const button = document.createElement('button');
    button.setAttribute('class', 'menu');
    button.setAttribute('id', `${obj[key].title}_menu`);
    header.appendChild(button);
    button.addEventListener('click', (e) => addContextMenu(e, obj[key]));

    const scroll = document.createElement('div');
    scroll.setAttribute('class', 'scroll');
    section.appendChild(scroll);

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'list');
    scroll.appendChild(ul);

    const footer = document.createElement('div');
    footer.setAttribute('class', 'footer');
    footer.setAttribute('id', `${obj[key].title}_footer`);
    section.appendChild(footer);

    const add = document.createElement('button');
    add.setAttribute('class', 'add');
    add.setAttribute('id', `${obj[key].title}_add`);
    add.innerHTML = 'Add card';
    footer.appendChild(add);

    // eslint-disable-next-line no-param-reassign
    obj[key].id = Number(key);

    obj[key].issues.forEach((issue) => {
      const item = document.createElement('li');

      item.className = 'kanban_item';
      item.textContent = issue;
      ul.appendChild(item);
    });

    if (obj[key].id === 0) {
      add.addEventListener('click', (e) => addFirst(e, obj[key].id));
    } else {
      add.addEventListener('click', (e) => addOther(e, obj[key].id));
      const id = obj[key].id;

      if (boards[id - 1].issues.length === 0) {
        add.classList.add('disable');
      } else {
        add.classList.remove('disable');
      }
    }

    if (obj[key].id !== obj.length - 1) {
      activeTasks += obj[key].issues.length;
    } else {
      finishedTasks += obj[key].issues.length;
    }
  });

  document.querySelector('.active_task').innerHTML = `Active tasks: ${activeTasks}`;
  document.querySelector('.finished_task').innerHTML = `Finished tasks: ${finishedTasks}`;
}
