//Reading the same object
var app = angular.module('myApp')

app.controller('LoginCtrl', function ($scope, $http, $location, UserData) {

    $scope.submitData = function () {
        console.log($scope.user);
        $http({
            url: 'http://localhost:3000/authenticate',
            method: 'POST',
            data: $scope.user
        }).then(function (res) {
            console.log(res);
            if (res.data.auth) {
                // $scope.message = "You have successfully logged in"
                UserData.email = $scope.user.email
                $location.path('/profile')
            }
            else {
                $scope.message = "Invalid Username/Password"
            }
        })
    }

})