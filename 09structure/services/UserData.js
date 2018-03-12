//Reading the same object
var app = angular.module('myApp')

app.factory('UserData', function(){
    return {
        email: '',
        pwd: ''
    }
})