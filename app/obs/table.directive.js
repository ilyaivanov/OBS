angular.module("app")
    .directive("table", function () {
        return {
            restrict: "A",
            templateUrl: "app/obs/table.html",
            scope: {
                table: '='
            }
        };
    });