'use strict';

var TodoActions = require('../actions/TodoActions');

function Footer() {

  return {

    templateUrl: 'js/views/Footer.html',

    scope: {
      allTodos: '='
    },

    restrict: 'E',

    controller: function($scope) {

      /**
       * Event handler to delete all completed TODOs
       */
      function _onClearCompletedClick() {
        TodoActions.destroyCompleted();
      }

      function _update($scope, todos) {

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

        $scope.total = total;
        $scope.itemsLeft = itemsLeft;
        $scope.itemsLeftPhrase = itemsLeftPhrase;
        $scope.completed = completed;
      };

      _update($scope, $scope.allTodos);

      $scope.onClearCompletedClick = _onClearCompletedClick;

      //listen for changes on allTodos - important to flag the 'deep' object watcher
      //since 'allTodos' is a map object rather than an array
      $scope.$watch('allTodos', function(newTodos) {
        _update($scope, newTodos);
      }, true);
    }
  };
};

module.exports = Footer;