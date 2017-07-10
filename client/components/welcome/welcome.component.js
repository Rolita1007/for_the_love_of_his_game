import WelcomeController from "./welcome.controller";
import WelcomeTemplate from "./welcome.html";

const welcomeComponent = {
  controller: WelcomeController,
  template: WelcomeTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("welcome", welcomeComponent);
