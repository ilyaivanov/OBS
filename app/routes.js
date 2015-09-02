angular.module("app")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
        //
        // For any unmatched url, redirect to /state1

        //
        // Now set up the states
        $stateProvider
            .state('obs', {
                url: "/obs",
                templateUrl: "app/obs/obs.html",
                controller: "ObsController",
                controllerAs: "obs"

            })
            .state('summary', {
                url: "/obs/:ucc",
                templateUrl: "app/obs/summary.html",
                controller: "ObsSummaryController",
                controllerAs: "summary"

            });

        $urlRouterProvider.otherwise("/obs");
    });