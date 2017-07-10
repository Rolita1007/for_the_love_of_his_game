import AthleteController from "./athlete.controller";
import athleteTemplate from "./athlere.html";

const athleteComponent = {
  controller: AthleteController,
  template: athleteTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("forTheLoveOfHisGameAthletes", athleteComponent);
