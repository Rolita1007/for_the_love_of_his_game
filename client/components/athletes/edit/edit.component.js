import EditController from "./edit.controller";
import EditTemplate from "./edit.html";

const EditComponent = {
  controller: EditController,
  template: EditTemplate
};

angular.module("forTheLoveOfHisGame")
       .component("edit", editComponent);
