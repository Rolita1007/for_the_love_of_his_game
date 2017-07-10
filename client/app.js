const angular = require('angular');
require("angular-ui-router");

angular.module('forTheLoveOfHisGame', ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      template: "<athletes></athletes>"
    })
    .state("athlete", {
      url: "/athlete/:id",
      template: "<show-athlete></show-athlete>"
    })
    .state("newAthlete", {
      url: "/athlete.new",
      template: "<new-athlete></new-athlete>"
    });

  $urlRouterProvider.otherwise("/");
}
