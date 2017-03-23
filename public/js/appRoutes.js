angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController as MainCtrl'
        })

        .state('page1', {
            url: '/page1',
            templateUrl: 'views/page1.html',
            controller: 'FirstController as FirstCtrl'
        })

        .state('page2', {
            url: '/page2',
            templateUrl: 'views/page2.html',
            controller: 'SecondController as SecondCtrl'
        })
});