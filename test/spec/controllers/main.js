'use strict';


describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  var store = {};

  var mockLocalStorageService = {
    get: function (key) {
      if(store.hasOwnProperty(key)) {
        return store[key];
      } else {
        return undefined;
      }
    },
    set: function (key, value) {
      store[key] = value;
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      // place here mocked dependencies
      localStorageService: mockLocalStorageService
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

  it('should add the same item to the list twice', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.addTodo();
    expect(scope.todos.length).toBe(2);
  });
});
