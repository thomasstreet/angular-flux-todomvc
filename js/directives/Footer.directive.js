'use strict';

function Footer() {

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

    controller: function($scope, $timeout) {

      _update($scope, $timeout, $scope.allTodos);

      $scope.$watch('allTodos', function(newTodos) {
        _update($scope, $timeout, newTodos);
      }, true);
    }
  };

};

module.exports = Footer;