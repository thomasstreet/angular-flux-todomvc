'use strict';

var TodoActions = require('../actions/TodoActions');

function TodoItem() {

  return {

    templateUrl: 'js/views/TodoItem.html',

    scope: {
      placeholder: '@',
      todo: '=',
      isEditing: '=',
      onSave: '&'
    },

    restrict: 'E',

    controller: function($scope) {

      function _onToggleComplete() {
        TodoActions.toggleComplete($scope.todo);
      };

      function _onDoubleClick() {
        $scope.isEditing = true;
      };

      /**
       * Event handler called within TodoTextInput.
       * Defining this here allows TodoTextInput to be used in multiple places
       * in different ways.
       * @param  {string} text
       */
      function _onSave(text) {
        TodoActions.updateText($scope.todo.id, text);
        $scope.isEditing = false;
      };

      function _onDestroyClick() {
        TodoActions.destroy($scope.todo.id);
      };

      $scope.isEditing = false;
      $scope.onSave = _onSave;
      $scope.onDoubleClick = _onDoubleClick;
      $scope.onDestroyClick = _onDestroyClick;
      $scope.onToggleComplete = _onToggleComplete;

      $scope.$watch('todo', function(newTodo) {
        $scope.complete = newTodo.complete;
      });
    }
  };
};

module.exports = TodoItem;