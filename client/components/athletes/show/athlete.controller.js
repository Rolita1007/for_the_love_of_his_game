AthletesController.$inject = ["athletesService", "$stateParams", "$state"];

function AthletesController(athletesService, $stateParams, $state) {
  const vm = this;

  vm.athlete = {};
  vm.deleteAthlete = function(id) {
    console.log("deleteAthlete");
    athletesService.deleteAthlete(id)
                   .then(res => {
                   console.log(res);
                   $state.go("athletes");
                   });
  }

  activate();

  function activate() {
    athletesService.getAthlete($stateParams.id).then(res => {
      vm.athlete = res.athlete;
      console.log(res.athlete);
    });
  }
}

export default AthletesController;
