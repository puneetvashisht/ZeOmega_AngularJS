var app = angular.module('myApp', ['ngRoute'])

        app.run(function ($rootScope) {

        })

        app.config(function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).when("/aboutus", {
                templateUrl: 'partials/about.html'
            }).when("/news/:city", {
                templateUrl: 'partials/news.html',
                controller: 'NewsCtrl'
            }).when("/login", {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            }).when("/profile", {
                templateUrl: 'partials/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                            myApp: function ($q, $timeout) {
                                var defer = $q.defer();
                                $timeout(function () {
                                    // if data is ready
                                    defer.resolve();
                                    // else if data is not ready
                                    // defer.reject();
                                }, 5000);
                                return defer.promise;
                            }
                        }
            })
        })