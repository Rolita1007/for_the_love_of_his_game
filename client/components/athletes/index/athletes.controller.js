AthletesController.$inject = ["athletesService"];

function AthletesController() {
  const vm = this;

  activate();

  function activate() {
    athletesService.getAthletes().then(res => {
      vm.athletes = res;
    })
  }
}

export default AthletesController;
