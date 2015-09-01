'use strict';

var ENTER_KEY_CODE = 13;

function TodoTextInput() {

  var $scope;
  var _onSave;

  function _save() {
    _onSave($scope.value);
    $scope.value = '';
  };

  /**
   * @param  {object} event
   */
  function _onKeyDown($event) {
    if($event.keyCode === ENTER_KEY_CODE) {
      _save();
    }
  };

  function _onBlur() {
    _save();
  };

  return {

    templateUrl: 'js/directives/TodoTextInput.html',

    scope: {
      placeholder: '@',
      value: '=',
      onSave: '&'
    },

    restrict: 'E',

    link: function(scope) {

      $scope = scope;
      _onSave = scope.onSave();

      scope.onKeyDown = _onKeyDown;
      scope.onBlur = _onBlur;
    }
  };

};

module.exports = TodoTextInput;