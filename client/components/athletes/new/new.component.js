import newAthleteController from "./new.controller";
import newAthleteTemplate from "./new.html";

const newAthleteComponent = {
  controller: newAthleteController,
  template: newAthleteTemplate
}

angular.module("forTheLoveOfHisGame")
       .component("newAthlete", newAthleteComponent);
