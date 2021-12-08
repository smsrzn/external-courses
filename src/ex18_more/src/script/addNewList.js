export function addNewList(value) {
  const section = document.createElement('section');
  section.setAttribute('class', 'unit');
  document.querySelector('.kanban').insertBefore(section, document.querySelector('.kanban').firstChild);

  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  section.appendChild(header);

  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  title.innerHTML = value;
  header.appendChild(title);

  const button = document.createElement('button');
  button.setAttribute('class', 'menu');
  header.appendChild(button);

  const scroll = document.createElement('div');
  scroll.setAttribute('class', 'scroll');
  section.appendChild(scroll);

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'list');
  scroll.appendChild(ul);

  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer');
  section.appendChild(footer);

  const add = document.createElement('button');
  add.setAttribute('class', 'add');
  add.innerHTML = 'Add card';
  footer.appendChild(add);
}
