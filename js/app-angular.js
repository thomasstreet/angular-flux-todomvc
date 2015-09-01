"use strict";

var angular = require('angular');

require('angular-ui-router');

module.exports = angular.module("todoapp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("todo", {
        url: "/",
        templateUrl: "js/views/Header.html",
        controller: "HeaderController"
      })

  })
  .directive("todoTextInput", require("./directives/TodoTextInput.directive"))
  .controller("HeaderController", ['$scope', require("./controllers/Header.controller")]);