"use strict";

var angular = require('angular');

require('angular-ui-router');

module.exports = angular.module("todoapp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("todo", {
        abstract:true,
        templateUrl: "js/views/TodoApp.html",
        controller: "TodoAppController"
      })
      .state("todo.sections", {
        url: "/",
        views: {
          'header@todo': {
            templateUrl: "js/views/Header.html",
            controller: 'HeaderController'
          },
          'mainSection': {
            templateUrl: "js/views/MainSection.html"
          }
        }
      });

  })
  .directive("todoTextInput", require("./directives/TodoTextInput.directive"))
  .directive("footer", require("./directives/Footer.directive"))
  .controller("HeaderController", ['$scope', require("./controllers/Header.controller")])
  .controller("TodoAppController", ['$scope', '$timeout', require("./controllers/TodoApp.controller")]);