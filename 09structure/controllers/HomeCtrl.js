//Reading the same object
var app = angular.module('myApp')

app.controller('HomeCtrl', function ($scope, $location) {
    $scope.goToAboutPage = function () {
        console.log('Code to go to the next page');
        $location.path('/aboutus')
    }
})