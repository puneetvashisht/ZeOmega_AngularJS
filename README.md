# ZeOmega_AngularJS


    Setup Instructions
        1. Microsoft Visual Code - https://code.visualstudio.com/
        2. NodeJS - https://nodejs.org/en/
            - node -v
            - npm -v
        3. Install static server - sudo npm install -g http-server

    JQuery vs AngularJS
        1. DOM manipulation is taken care of by AngularJS Framework.
        2. Less JS in Angular, less complexity
        3. AngularJS is a framework - comprehensive solution for UI stuff

    AnguarJS Basics
        1. AngularJS Module : angular.module
        2. MVC pattern in AngularJS - Separation of concerns  angular.controller($scope)
        3. MVW - Module View Whatever
        4. Model ($scope)
        5. With each controller, you get a unique $scope object
        6. Each controller scope is extention of $rootScope (super-parent)
        7. $rootScope, associated with Module (module-level) - can contain common methods and fields but it is bad practice to put to much content.
        8. Controller scopes which are direct/indirect extensions of scope.
        9. Factories - factory for common objects that can be shared by different controllers.