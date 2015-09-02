'use strict';

var TodoActions = require('../actions/TodoActions');

function MainSection() {

  return {

    templateUrl: 'js/views/MainSection.html',

    scope: {
      allTodos: '=',
      areAllComplete: '='
    },

    restrict: 'E',

    controller: function($scope) {

      /**
       * Event handler to mark all TODOs as complete
       */
      function _onToggleCompleteAll() {
        TodoActions.toggleCompleteAll();
      };

      $scope.onToggleCompleteAll = _onToggleCompleteAll;

      $scope.$watch('allTodos', function(newTodos) {
        $scope.enabled = newTodos && Object.keys(newTodos).length > 0 ? true : false;
      }, true);

      $scope.$watch('areAllComplete', function(complete) {
        $scope.complete = complete;
      });
    }
  };
};

module.exports = MainSection;