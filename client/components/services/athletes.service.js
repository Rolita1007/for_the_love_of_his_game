const angular = require("angular");

athletesService.$inject = ["$http"];

function athletesService ($http) {
  const service = this;

  service.getAllAthletes = function () {
    return $http.get("/athletes").then(res => {
      return res.data;
    });
  };

  service.getAthlete = function (id) {
    return $http.get("/athletes/" + id).then(res => {
      return res.data;
    });
  };

  service.saveAthlete = function (newAthlete) {
    return $http.post("/athletes", newAthlete).then(res => {
      return res.data;
    });
  };

  service.updateAthlete = function(athlete) {
    return $http.patch("/athletes/" + athlete.id, athlete)
            .then(res => {
              return res.data;
            });
  }
  service.deleteAthlete = function(id) {
    console.log("deleteAthleteservice");
    return $http.delete("/athletes/" + id)
                .then(res => {
                  return res
                });
  }

  return service;

}

angular.module("forTheLoveOfHisGame")
       .service("athletesService", athletesService);
