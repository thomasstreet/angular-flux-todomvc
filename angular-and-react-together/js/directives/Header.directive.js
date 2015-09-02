'use strict';

var TodoActions = require('../actions/TodoActions');

function Header() {

  return {

    templateUrl: 'js/views/Header.html',

    restrict: 'E',

    controller: function($scope) {

      /**
       * Event handler called within TodoTextInput.
       * Defining this here allows TodoTextInput to be used in multiple places
       * in different ways.
       * @param {string} text
       */
      function _onSave(text) {
        if(text.trim()){
          TodoActions.create(text);
        }
      };

      $scope.onSave = _onSave;
    }
  };

};

module.exports = Header;