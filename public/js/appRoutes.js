angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/page1', {
			templateUrl: 'views/page1.html',
			controller: 'FirstController'
		})

		.when('/page2', {
			templateUrl: 'views/page2.html',
			controller: 'SecondController'	
		});

	$locationProvider.html5Mode(true);

}]);