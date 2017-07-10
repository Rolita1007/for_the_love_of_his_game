import AthletesController from "./athletes.controller";
import AthletesTemplate from "./athletes.html";

const athletesComponent = {
  controller: AthletesController,
  template: AthletesTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("athletes", athletesComponent);
