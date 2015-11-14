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


    /* Allow the group number to be toggled between the new and old
     * format by clicking on the group number.
     */
    $scope.toggleGroup = true;

    $scope.$watch('toggleGroup', function() {
        $scope.groupNumberText = $scope.toggleGroup ? 'Group Number' : 'Old Group Number';
    });


    /* Settings for % human body mass graph */
    $scope.barData = {
        labels: ['% Human body mass'],
        series: [
            [element.percent_human_body_mass]
        ]
    };

    $scope.barOptions = {
        seriesBarDistance: 100,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 50
        }
    };

}]);
