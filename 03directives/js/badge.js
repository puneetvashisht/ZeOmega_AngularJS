 
        var app = angular.module('myApp', [])

        app.controller('AppCtrl', function($scope){

        })

        app.directive('zoBadge', function(){
            return {
                restrict: 'E',
                scope: { },
                templateUrl: 'partial/badge.html',
                link: function(scope, element, attrs){
                    console.log(scope)
                    console.log(attrs.caption)
                    scope.caption = attrs.caption
                    scope.count = attrs.count

                    element.bind('click', function(){
                        scope.count = parseInt(scope.count) +1;
                        scope.$apply();
                    })
                }
            }
        })