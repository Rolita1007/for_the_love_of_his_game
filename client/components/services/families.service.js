const angular = require("angular");

familiesService.$inject = ["$http"];

function familiesService ($http) {
  const service = this;

  service.getAllFamilies = function () {
    return $http.get("/families").then(res => {
      return res.data;
    });
  };

  service.getFamily = function (id) {
    return $http.get("/families/" + id).then(res => {
      return res.data;
    });
  };

  service.saveFamily = function (newFamily) {
    return $http.post("/families", newFamily).then(res => {
      return res.data;
    });
  };

  service.updateFamily = function(family) {
    return $http.patch("/families/" + family.id, family)
            .then(res => {
              return res.data;
            });
  }
  service.deleteFamily = function(id) {
    console.log("deleteFamilyservice");
    return $http.delete("/families/" + id)
                .then(res => {
                  return res
                });
  }

  return service;

}

angular.module("forTheLoveOfHisGame")
       .service("familiesService", familiesService);
