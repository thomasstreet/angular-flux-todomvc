"use strict";

var TodoStore = require('../stores/TodoStore');

function TodoAppController($scope, $timeout) {

  function _update() {
    $timeout(function() {
      $scope.allTodos = TodoStore.getAll();
      $scope.areAllComplete = TodoStore.areAllComplete();
    });
  };

  TodoStore.addChangeListener(_update);

  $scope.$on("$destroy", function() {
    TodoStore.removeChangeListener(_update);
  });
};

module.exports = TodoAppController;