"use strict";

var TodoStore = require('../stores/TodoStore');

function TodoAppController($scope, $timeout) {

  function _update() {

    //important - wrap code called outside
    //the angular universe in $timeout or $scope.$apply
    $timeout(function() {
      $scope.allTodos = TodoStore.getAll();
      $scope.areAllComplete = TodoStore.areAllComplete();
    });
  };

  //listen for TodoStore changes
  TodoStore.addChangeListener(_update);

  $scope.$on("$destroy", function() {

    //stop listening for TodoStore changes
    TodoStore.removeChangeListener(_update);
  });
};

module.exports = TodoAppController;