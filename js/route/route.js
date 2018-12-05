maverick.config(["$routeProvider","$locationProvider","$rootScopeProvider",function($routeProvider,$locationProvider,$rootScopeProvider){
	
	$routeProvider.when("/",{
		templateUrl:"index.html",
		controller:"portfolioController"
	})
	.when("/",{
		templateUrl:"generic.html",
		controller:"portfolioController"
	})
	.when("/",{
		templateUrl:"maverick.html",
		controller:"maverickController"
	})
	.when("/",{
		templateUrl:"second.html",
		controller:"maverickController"
	})
	.otherwise({
		redirectTo:"/"
	})
	$locationProvider.html5Mode({
		enable:true
		// requireBase:false
	})
}])