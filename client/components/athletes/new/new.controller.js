NewAthleteController.$inject = ["$stateParams", "$http", "athletesService", "$state", "familiesService"];

function NewAthleteController($stateParams, $http, athletesService, $state, familiesService) {
  var vm = this;
  vm.athlete = {};
  vm.saveAthlete = saveAthlete;
  vm.getFamilies = getFamilies;
  vm.families = [];

  activate();

  function activate() {
    getFamilies();
  }

  function saveAthlete() {
    athletesService.saveAthlete(vm.athlete)
    .then(function(res) {
      console.log(res);
      // $state.go("welcome");
      $state.go("showAthlete", {id: res.athlete.id})
    });

  };

  function getFamilies() {
    familiesService.getAllFamilies()
    .then(res => {
      console.log(res);
      vm.families = res;
    });
  }
}

export default NewAthleteController;
