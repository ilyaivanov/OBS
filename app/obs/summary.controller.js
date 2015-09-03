function ObsSummaryController($stateParams, models) {
    var vm = this;

    function header(name) {
        return [name, vm.model.name, "Segment"];
    }

    function createDemographics() {
        return [
            header("DEMOGRAPHICS"),
            ["Age (Median)", "39", "56"],
            ["Male (%)", "42%", "62%"],
            ["Married (%)", "44%", "66%"],
            ["Education (% College +)", "75%", "70%"],
            ["Income (Median)", "$84,312", "$113,941"],
            ["Ethnicity (% Minority)", "34%", "26%"]
        ];
    }

    function createHobbies() {
        return [
            header("HOBBIES"),
            ["Going to the movies", "56%", "44%"],
            ["Cooking", "51%", "40%"],
            ["Dancing or ballet performances", "20%", "9%"],
            ["Painting, sketching", "15%", "5%"],
            ["Card games (bridge, poker, etc.)", "30%", "31%"]
        ]
    }

    function createAttitudes() {
        return [
            header("ATTITUDES"),
            ["Fuel economy is a leading consideration in my purchase decision", "31%", "22%"],
            ["Price is most important to me when buying a new vehicle", "24%", "15%"],
            ["I want vehicles that provide that open-air driving experience", "32%", "25%"],
            ["I need my vehicle to work as hard as I do", "29%", "24%"],
            ["I need a vehicle that can be used for many different functions", "16%", "11%"]
        ];
    }

    function createModelImage() {
        return [
            header("MODEL IMAGE"),
            ["Easy going", "15%", "4%"],
            ["Functional", "25%", "13%"],
            ["Reliable", "43%", "33%"],
            ["Capable", "19%", "10%"],
            ["Honest", "10%", "3%"]
        ];
    }

    function createSample(name, option){
        return [
            header(name),
            [option + " 1", "56%", "44%"],
            [option + " 2", "51%", "40%"],
            [option + " 3", "20%", "9%"],
            [option + " 4", "15%", "5%"],
            [option + " 5", "30%", "31%"]
        ];
    }


    vm.model = models.getModel($stateParams.ucc);

    vm.demographics = createDemographics();
    vm.hobbies = createHobbies();
    vm.attitudes = createAttitudes();
    vm.modelImage = createModelImage();

    vm.purchase = createSample("PURCHASE REASONS", "Purchase reason");
    vm.considered = createSample("VEHICLE MOST SERIOUSLY CONSIDERED", "Vehicle MSC");
    vm.loved = createSample("WHAT IS LOVED (Experience)", "Loved Attribute");
    vm.sales = createSample("SOURCE OF SALES (Where they came from)", "Vehicle Disposed");
    vm.loyalty = createSample("LOYALTY REASONS", "Rejection reason");
    vm.rejection = createSample("REJECTION REASONS", "Rejection reason");
    vm.crossshoping = createSample("CROSS-SHOPPING", "Vehicle Purchased");
    vm.activeDefection = createSample("ACTIVE DEFECTION", "Active Defection Reason");
    vm.defection = createSample("DEFECTION (What was purchased instead)", "Vehicle Purchased");
    vm.passivedefection = createSample("PASSIVE DEFECTION", "Passive Defection Reason");
}

angular
    .module("app")
    .controller("ObsSummaryController", ObsSummaryController);