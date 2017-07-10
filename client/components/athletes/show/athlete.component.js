import AthleteController from "./athlete.controller";
import athleteTemplate from "./athlete.html";

const athleteComponent = {
  controller: AthleteController,
  template: athleteTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("showAthlete", athleteComponent);
