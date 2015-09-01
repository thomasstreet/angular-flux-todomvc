"use strict";

var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');

function TodoAppController($scope, $timeout) {

  function _update() {
    $timeout(function() {
       $scope.allTodos = TodoStore.getAll();
    });
  };

  TodoStore.addChangeListener(_update);

  $scope.$on("$destroy", function() {
    TodoStore.removeChangeListener(_update);
  });
};

module.exports = TodoAppController;