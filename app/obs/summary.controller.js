function ObsSummaryController($stateParams, models) {
    var vm = this;

    vm.model = models.getModel($stateParams.ucc);
}

angular
    .module("app")
    .controller("ObsSummaryController", ObsSummaryController);