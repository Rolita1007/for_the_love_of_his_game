const angular = require('angular');
require("angular-ui-router");

angular.module('for_the_love_of_his_game', ["ui.router"]).config(router);

router.$inject = ["stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
  $state.Provider
    .state("home", {
      url: "/",
      template: "<for-the-love-of-his-game-athletes></for-the-love-of-his-game-athletes>"
    })
    .state("athlete", {
      url: "/athlete/:id",
      template: "<for-the-love-of-his-game-athlete></for-the-love-of-his-game-athlete>"
    })
    .state("newAthlete", {
      url: "/athlete.new",
      template: "<for-the-love-of-his-game-new-athlete></for-the-love-of-his-game-new-athlete>"
    });

  $urlRouterProvider.otherwise("/");
}
