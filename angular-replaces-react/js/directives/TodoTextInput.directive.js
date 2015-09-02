'use strict';

var ENTER_KEY_CODE = 13;

function TodoTextInput() {

  return {

    templateUrl: 'js/views/TodoTextInput.html',

    scope: {
      placeholder: '@',
      inputClass: '@',
      value: '=',
      onSave: '&'
    },

    restrict: 'E',

    controller: function($scope) {

      var onSave = $scope.onSave();

      function _save() {
        onSave($scope.text);
        $scope.text = '';
      };

      /**
       * @param  {object} event
       */
      function _onKeyDown($event) {
        if($event.keyCode === ENTER_KEY_CODE) {
          _save();
        }
      };

      function _onFocus() {
        $scope.text = $scope.value || '';
      };

      function _onBlur() {
        _save();
      };

      $scope.text = '';
      $scope.onKeyDown = _onKeyDown;
      $scope.onBlur = _onBlur;
      $scope.onFocus = _onFocus;

      $scope.$watch('value', function(newValue) {
        $scope.text = newValue || '';
      });
    }
  };
};

module.exports = TodoTextInput;