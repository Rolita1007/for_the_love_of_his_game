import FamiliesController from "./families.controller";
import FamiliesTemplate from "./families.html";

const FamiliesComponent = {
  controller: FamiliesController,
  template: FamiliesTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("families", FamiliesComponent);
