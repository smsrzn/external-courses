function createNewObject() {
  const user = {};

  user.firstName = 'Ivan';
  user.lastName = 'Ivanov';
  user.age = 45;
  user.isTrainee = true;
  delete user.isTrainee;

  return user;
}

module.exports = createNewObject;
