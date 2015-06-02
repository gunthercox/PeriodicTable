var app = angular.module('PeriodicTableApp');

app.controller('ElementDetailController', ['$scope', 'close', function($scope, close) {
//app.controller('ElementDetailController', ['$scope', function($scope) {

  $scope.display = true;

  $scope.close = function() {
    $scope.display = false;
 	  close();
  };

}]);
