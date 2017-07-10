AthletesController.$inject = ["athletesService"];

function AthletesController(athletesService) {
  const vm = this;

  activate();

  function activate() {
    athleteService.getAthlete($stateParams.id).then(res => {
      vm.athletes = res;
    });
  }
}

export default AthletesController;
