function ObsController($state, models){
    var vm = this;

    vm.models = models.getModels();

    vm.viewSummary = function (ucc) {
        $state.go("summary", {ucc: ucc});
    };

}


angular.module("app")
.controller("ObsController", ObsController);