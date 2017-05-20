
var app = angular.module("myApp",[]);

app.controller("myController", ["$scope", function($scope){
	$scope.message = "Hello World srikanth";
}])

app.directive("mySrikanthTechMinds", function(){
	return {
		restrict : 'EACM',
		template : "<h1>srikanth reddy custom directive:</h1>",
		replace  :'true'
	}
	// creating directive name take care in html page
})