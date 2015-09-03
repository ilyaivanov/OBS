function ObsSummaryController($stateParams, models) {
    var vm = this;

    function createTable(name) {
        return [
            [name, vm.model.name, "Segment"],
            ["Answer 1", 2, 3],
            ["Answer 2", 2, 3],
            ["Answer 3", 2, 3]
        ];
    }


    vm.model = models.getModel($stateParams.ucc);
    vm.demographics = createTable("DEMOGRAPHICS");
}

angular
    .module("app")
    .controller("ObsSummaryController", ObsSummaryController);