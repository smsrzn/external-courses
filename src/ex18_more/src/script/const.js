export const usersMenu = document.querySelector('.user_menu');
export const buttonCreateNewList = document.querySelector('.create_new_list');
export const boardsMocks = [
  {
    title: 'Backlog',
    id: 0,
    issues: ['Login page – performance issues', 'Sprint bugfix'],
  },
  {
    title: 'Ready',
    id: 1,
    issues: [
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
  },
  {
    title: 'Progress',
    id: 2,
    issues: [
      'User page – performance issues',
      'Auth bugfix',
    ],
  },
  {
    title: 'Finished',
    id: 3,
    issues: [
      'Main page – performance issues',
      'Main page bugfix',
    ],
  },
];
