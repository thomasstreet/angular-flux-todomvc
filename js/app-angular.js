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
          'mainSection': {
            templateUrl: "js/views/MainSection.html"
          }
        }
      });

  })
  .directive("todoTextInput", require("./directives/TodoTextInput.directive"))
  .directive("header", require("./directives/Header.directive"))
  .directive("footer", require("./directives/Footer.directive"))
  .controller("TodoAppController", ['$scope', '$timeout', require("./controllers/TodoApp.controller")]);