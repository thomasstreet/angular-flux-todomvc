'use strict';

var TodoActions = require('../actions/TodoActions');

function Footer() {

  /**
   * Event handler to delete all completed TODOs
   */
  function _onClearCompletedClick() {
    TodoActions.destroyCompleted();
  }

  function _update($scope, $timeout, todos) {

    var allTodos = todos || {};
    var total = Object.keys(allTodos).length;

    var completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    var itemsLeft = total - completed;
    var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    $timeout(function() {
      $scope.total = total;
      $scope.itemsLeft = itemsLeft;
      $scope.itemsLeftPhrase = itemsLeftPhrase;
      $scope.completed = completed;
    });
  };

  return {

    templateUrl: 'js/views/Footer.html',

    scope: {
      allTodos: '='
    },

    restrict: 'E',

    link: function(scope) {
      scope.onClearCompletedClick = _onClearCompletedClick;
    },

    controller: function($scope, $timeout) {

      _update($scope, $timeout, $scope.allTodos);

      $scope.$watch('allTodos', function(newTodos) {
        _update($scope, $timeout, newTodos);
      }, true);
    }
  };

};

module.exports = Footer;