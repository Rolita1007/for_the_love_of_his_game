editAthleteController.$inject = ["athletesService", "$stateParams", "$state"];

function editAthleteController(athletesService, $stateParams, $state) {
  const vm = this;
  vm.athlete = {};
  vm.updateAthlete = updateAthlete;

  activate();

  function activate() {
    console.log($stateParams);
    athletesService.getAthlete($stateParams.id)
    .then(function(res) {
      vm.athlete = res.athlete;
    });
  }

  function updateAthlete() {
    athletesService.updateAthlete(vm.athlete)
    .then(function(res) {
      if (res.error) {
        $state.go("editAthlete", {id: vm.athlete.id});
      } else {
        $state.go("showAthlete", {id: vm.athlete.id});
      }
    });
  }
}

angular
  .module("forTheLoveOfHisGame")
  .controller("editAthleteController", editAthleteController);

export default editAthleteController;
