"use strict";

var TodoActions = require('../actions/TodoActions');

function HeaderController($scope) {

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
};

module.exports = HeaderController;