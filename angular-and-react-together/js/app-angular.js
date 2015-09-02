"use strict";

var angular = require('angular');

require('angular-ui-router');

//configure our angular app
//and it's dependent parts
module.exports = angular.module("todoapp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("todo", {
        url:"/",
        templateUrl: "js/views/TodoApp.html",
        controller: "TodoAppController"
      });
  })
  .directive("todoTextInput", require("./directives/TodoTextInput.directive"))
  .directive("header", require("./directives/Header.directive"))
  .directive("mainSection", require("./directives/MainSection.directive"))
  .directive("todoItem", require("./directives/TodoItem.directive"))
  .directive("footer", require("./directives/Footer.directive"))
  .controller("TodoAppController", ['$scope', '$timeout', require("./controllers/TodoApp.controller")]);