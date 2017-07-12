FamiliesController.$inject = ["familiesService"];

function FamiliesController(familiesService) {
  const vm = this;

  activate();

  function activate() {
    familiesService.getAllFamilies().then(res => {
      vm.families = res;
    });
  }
}

export default FamiliesController;
