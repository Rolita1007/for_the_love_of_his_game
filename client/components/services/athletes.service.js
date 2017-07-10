const angular = require("angular");

athleteService.$inject = ["http"];

function athleteService ($http) {
  const service = this;

  service.getAllAthletes = function () {
    return $http.get("/athlete").then(res => {
      return res.data;
    });
  };

  service.getAthlete = function (id) {
    return $http.get("/athlete" + id).then(res => {
      return res.data;
    });
  };

  service.saveAthlete = function (newAthlete) {
    return $http.post("/athlete", newAthlete).then(res => {
      return res.data;
    });
  };

  return service;

}

angular.module("forTheLoveOfHisGame")
       .service("athleteService", athletesService);
