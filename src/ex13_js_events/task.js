const usersMenu = document.querySelector('.user_menu');

function createSubUserMenu() {
  if (!document.querySelector('.userSubMenu')) {
    const ul = document.createElement('ul');
    ul.className = 'userSubMenu';
    usersMenu.append(ul);
    document.querySelector('.user_menu').classList.toggle('active');
    for (let i = 0; i < 3; i += 1) {
      ul.append(document.createElement('li'));
    }
    const subItems = ul.children;
    subItems[0].innerHTML = "<a href = '#'>My account</a>";
    subItems[1].innerHTML = "<a href = '#'>My task</a>";
    subItems[2].innerHTML = "<a href = '#'>Log out</a>";
  } else {
    document.querySelector('.userSubMenu').remove();
    document.querySelector('.user_menu').classList.toggle('active').remove();
  }
}

usersMenu.addEventListener('click', createSubUserMenu);

let boardsMocks = {
  backlog: [
    'Login page – performance issues',
    'Sprint bugfix',
  ],
  ready: [
    'Shop page – performance issues',
    'Checkout bugfix',
    'Shop bug1',
    'Shop bug2',
    'Shop bug3',
    'Shop bug4',
    'Shop bug5',
    'Shop bug6',
    'Shop page – performance issues',
    'Checkout bugfix',
  ],
  progress: [
    'User page – performance issues',
    'Auth bugfix',
  ],
  finished: [
    'Main page – performance issues',
    'Main page bugfix',
  ],
};

const buttonReadyAdd = document.getElementById('ready_add');
const buttonProgressAdd = document.getElementById('progress_add');
const buttonFinishedAdd = document.getElementById('finished_add');

function displayData(obj) {
  document.querySelectorAll('.kanban_item').forEach((item) => {
    item.remove();
  });
  Object.keys(obj).forEach((key) => {
    obj[key].forEach((title) => {
      const item = document.createElement('li');
      item.className = 'kanban_item';
      item.textContent = title;
      document.getElementById(key).append(item);
    });
    if (key === 'ready') {
      if (boardsMocks.backlog.length === 0) {
        buttonReadyAdd.classList.add('disable');
      } else {
        buttonReadyAdd.classList.remove('disable');
      }
    }
    if (key === 'progress') {
      if (boardsMocks.ready.length === 0) {
        buttonProgressAdd.classList.add('disable');
      } else {
        buttonProgressAdd.classList.remove('disable');
      }
    }
    if (key === 'finished') {
      if (boardsMocks.progress.length === 0) {
        buttonFinishedAdd.classList.add('disable');
      } else {
        buttonFinishedAdd.classList.remove('disable');
      }
    }
  });
}

function saveTaskInBacklog() {
  const input = document.querySelector('.kanban_input');
  const button = document.getElementById('backlog_add');
  const text = input.value;

  if (text === '') {
    input.remove();
    button.classList.remove('disable');
  } else {
    boardsMocks.backlog.push(text);
    displayData(boardsMocks);
    localStorage.setItem('kanbanBoard', JSON.stringify(boardsMocks));
    input.remove();
    button.classList.remove('disable');
  }
}

function addTaskInBacklog() {
  if (document.querySelector('.kanban_input') === null) {
    const input = document.createElement('input');
    input.setAttribute('class', 'kanban_input');
    input.addEventListener('blur', saveTaskInBacklog);
    const parentElement = document.getElementById('backlog_footer');
    parentElement.insertBefore(input, parentElement.firstElementChild);
    document.getElementById('backlog_add').classList.add('disable');
    document.querySelector('.kanban_input').focus();
  }
}

function saveTaskInReady(eventKanbanUnit) {
  const select = eventKanbanUnit.target;
  const enteredText = select.value;
  boardsMocks.ready.push(enteredText);
  boardsMocks.backlog.splice(select.selectedIndex - 1, 1);
  displayData(boardsMocks);
  localStorage.setItem('kanbanBoard', JSON.stringify(boardsMocks));
  select.remove();
}

function addSelectInReady() {
  if (document.getElementById('ready_select') === null && boardsMocks.backlog.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');
    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = 'ready_select';
    JSON.parse(localStorage.getItem('kanbanBoard')).backlog.forEach((el) => {
      const optionElement = new Option(el, el);
      optionElement.className = 'kanban_option';
      selectElement.addEventListener('change', saveTaskInReady);
      selectElement.append(optionElement);
    });
    const parentElement = document.getElementById('ready_footer');
    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    buttonReadyAdd.classList.add('disable');
  }
}

function saveTaskInProgress(eventKanbanUnit) {
  const select = eventKanbanUnit.target;
  const enteredText = select.value;
  boardsMocks.progress.push(enteredText);
  boardsMocks.ready.splice(select.selectedIndex - 1, 1);
  displayData(boardsMocks);
  localStorage.setItem('kanbanBoard', JSON.stringify(boardsMocks));
  select.remove();
}

function addSelectInProgress() {
  if (document.getElementById('progress_select') === null && boardsMocks.ready.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');
    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = 'progress_select';
    JSON.parse(localStorage.getItem('kanbanBoard')).ready.forEach((el) => {
      const optionElement = new Option(el, el);
      optionElement.className = 'kanban_option';
      selectElement.addEventListener('change', saveTaskInProgress);
      selectElement.append(optionElement);
    });
    const parentElement = document.getElementById('progress_footer');
    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    buttonReadyAdd.classList.add('disable');
  }
}

function saveTaskInFinished(eventKanbanUnit) {
  const select = eventKanbanUnit.target;
  const enteredText = select.value;
  boardsMocks.finished.push(enteredText);
  boardsMocks.progress.splice(select.selectedIndex - 1, 1);
  displayData(boardsMocks);
  localStorage.setItem('kanbanBoard', JSON.stringify(boardsMocks));
  select.remove();
}

function addSelectInFinished() {
  if (document.getElementById('finished_select') === null && boardsMocks.progress.length > 0) {
    const selectElement = document.createElement('select');
    const option = new Option('Выберите задачу');
    option.classList.add('kanban_option_hidden');
    selectElement.className = 'kanban_select';
    selectElement.append(option);
    selectElement.id = 'finished_select';
    JSON.parse(localStorage.getItem('kanbanBoard')).progress.forEach((el) => {
      const optionElement = new Option(el, el);
      optionElement.className = 'kanban_option';
      selectElement.addEventListener('change', saveTaskInFinished);
      selectElement.append(optionElement);
    });
    const parentElement = document.getElementById('finished_footer');
    parentElement.insertBefore(selectElement, parentElement.firstElementChild);
    buttonReadyAdd.classList.add('disable');
  }
}

function load() {
  if (JSON.parse(localStorage.getItem('kanbanBoard'))) {
    boardsMocks = JSON.parse(localStorage.getItem('kanbanBoard'));
  } else {
    localStorage.setItem('kanbanBoard', JSON.stringify(boardsMocks));
  }
  displayData(boardsMocks);
}

window.addEventListener('load', load());

document.getElementById('backlog_add').addEventListener('click', addTaskInBacklog);
buttonReadyAdd.addEventListener('click', addSelectInReady);
buttonProgressAdd.addEventListener('click', addSelectInProgress);
buttonFinishedAdd.addEventListener('click', addSelectInFinished);
