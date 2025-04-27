const UserController = require('./user-controller');
const User = require('./user');

describe('UserController', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController(); 
  });

  test('should add a user to userController', () => {    
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.getUsers()).toContain(user);
  });

  test('should not contain a user before adding it', () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");

    expect(userController.getUsers()).not.toContain(user);
  });

  test('should remove a user from userController', () => {    
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);
    userController.remove(user);

    expect(userController.getUsers()).not.toContain(user);
  });

  test('should not change users when removing a user that is not in the list', () => {
    const existingUser = { id: 1, name: "Ana", email: "ana@generation.org" };
    const nonExistentUser = { id: 2, name: "Pedro", email: "pedro@generation.org" };
  
    userController.add(existingUser); 
  
    const usersBefore = [...userController.getUsers()]; 
  
    userController.remove(nonExistentUser); 
  
    expect(userController.getUsers()).toEqual(usersBefore); 
  });

  test('should find a user by email when the user exists', () => {
    const user = { id: 1234, name: "Santiago", email: "santiago@generation.org" };
  
    userController.add(user);
  
    const foundUser = userController.findByEmail("santiago@generation.org");
  
    expect(foundUser).toEqual(user);
  });
  
  test('should return undefined when searching for a non-existing email', () => {
    const user = { id: 1234, name: "Santiago", email: "santiago@generation.org" };
  
    userController.add(user);
  
    const foundUser = userController.findByEmail("noexiste@generation.org");
  
    expect(foundUser).toBeUndefined();
  });

  test('should find a user by email when the user exists', () => {
    const user = { id: 1234, name: "Santiago", email: "santiago@generation.org" };
  
    userController.add(user);
  
    const foundUser = userController.findByEmail("santiago@generation.org");
  
    expect(foundUser).toEqual(user);
  });
  
  test('should return undefined when searching for a non-existing email', () => {
    const user = { id: 1234, name: "Santiago", email: "santiago@generation.org" };
  
    userController.add(user);
  
    const foundUser = userController.findByEmail("noexiste@generation.org");
  
    expect(foundUser).toBeUndefined();
  });
  
  
});




