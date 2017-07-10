NewAthleteController.$inject = ["$stateParams", "$http", "athletesService", "$state"];

function NewAthleteController($stateParams, $http, athletesService, $state) {
  var vm = this;
  vm.athlete = {};

  vm.saveAthlete = function () {
    athletesService.saveAthlete(vm.athlete)
    .then(function(res) {
      console.log(res);
      // $state.go("welcome");
      $state.go("showAthlete", {id: res.athlete.id})
    });

  };
}

export default NewAthleteController;
