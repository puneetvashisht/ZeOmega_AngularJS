//Reading the same object
var app = angular.module('myApp')

app.controller('ProfileCtrl', function ($scope, UserData) {
    $scope.user = UserData;
})