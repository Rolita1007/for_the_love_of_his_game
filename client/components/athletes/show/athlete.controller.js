AthletesController.$inject = ["athletesService", "$stateParams"];

function AthletesController(athletesService, $stateParams) {
  const vm = this;

  vm.athlete = {};

  activate();

  function activate() {
    athletesService.getAthlete($stateParams.id).then(res => {
      vm.athlete = res.athlete;
      console.log(res.athlete);
    });
  }
}

export default AthletesController;
