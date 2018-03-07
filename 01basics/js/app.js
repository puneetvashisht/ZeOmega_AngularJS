 // 1. Create a module in AngularJS, which has no dependencies
 var app = angular.module('myApp', [])

 app.run(function(){
     console.log('Module created..');
 })
