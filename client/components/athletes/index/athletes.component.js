import AthletesController from "./athletes.controller";
import AthletesTemplate from "./athletes.html";

const athletesComponent = {
  controller: AthletesController,
  template: athletesTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("forTheLoveOfHisGameAthletes", athleteComponent);
