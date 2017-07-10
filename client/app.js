const angular = require('angular');
require("angular-ui-router");

angular.module('forTheLoveOfHisGame', ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("welcome", {
      url: "/",
      template: "<welcome></welcome>"
    })
    .state("athletes", {
      url: "/athletes",
      template: "<athletes></athletes>"
    })
    .state("showAthlete", {
      url: "/athletes/:id",
      template: "<show-athlete></show-athlete>"
    })
    .state("newAthlete", {
      url: "/athletes/new",
      template: "<new-athlete></new-athlete>"
    });

  $urlRouterProvider.otherwise("/");
}
