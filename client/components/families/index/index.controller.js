FamiliesController.$inject = ["athletesService"];

function FamiliesController(athletesService) {
  const vm = this;

  activate();

  function activate() {
    athletesService.getAllAthletes().then(res => {
      vm.athletes = res;
    });
  }
}

export default AthletesController;
