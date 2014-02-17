'use strict';

angular.module('evergitApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/notes').success(function(notes) {
      $scope.notes = notes;
    });
  });
