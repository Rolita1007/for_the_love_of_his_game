import athletesController from "./athletes.controller";
import atheletesController from "./athletes.html";

const athletesComponent = {
  controller: athletesController,
  template: athletesTemplate
};

angular.module("for_the_love_of_his_game").component("for_the_love_of_his_game_athletes", athleteComponent);
