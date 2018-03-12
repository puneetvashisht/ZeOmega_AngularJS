//Reading the same object
var app = angular.module('myApp')

app.controller('NewsCtrl', function ($scope, $routeParams) {
    console.log($routeParams);
    $scope.city = $routeParams.city
})