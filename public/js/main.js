angular.module('kendoGrid', ['kendo.directives','kendo.window','ngRoute',])
.config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        });

       

        $routeProvider.when('/home/new', {
            templateUrl: 'partials/create.html'
        });

        $routeProvider.when('/home/new/recurso', {
            templateUrl: 'partials/recurso.html'
        });

        $routeProvider.when('/home/new/despesa', {
            templateUrl: 'partials/despesa.html'
        });

        $routeProvider.when('/home/new/investimento', {
            templateUrl: 'partials/investimento.html'
        });

        $routeProvider.when('/home/new/imposto', {
            templateUrl: 'partials/imposto.html'
        });

          $routeProvider.when('/home/new/modal', {
            templateUrl: 'partials/modal.html'
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    });