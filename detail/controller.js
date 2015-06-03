var app = angular.module('PeriodicTableApp');

app.controller('ElementDetailController',
    ['$scope', '$element', 'element', 'close',
    function($scope, $element, element, close) {

    $scope.display = true;
    $scope.element = element;

    $scope.close = function() {
        $scope.display = false;
        close();
    };

}]);
