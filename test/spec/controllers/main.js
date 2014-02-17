'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('evergitApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/notes')
      .respond([{ text: 'note 1'}, { text: 'note 2'}]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of notes to the scope', function () {
    expect(scope.notes).toBeUndefined();
    $httpBackend.flush();
    expect(scope.notes.length).toBe(2);
  });
});
