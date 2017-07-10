NewAthleteController.$inject = ["$stateParams", "http", "athletesService", "$State"];

function NewAthleteController($stateParams, $http, athletesService, $state) {
  var vm = this;
  vm.athlete = ();

  vm.saveAthlete = function () {
    athletesService.saveAthlete(vm.athlete).then(res) => {
      console.log(res);

  $state.go("home");
    };

  };
}

export default NewAthleteController;
