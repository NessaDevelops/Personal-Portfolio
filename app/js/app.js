var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/partials/home.html"
    })
    .when("/about", {
        templateUrl : "app/partials/about.html"
    })
    .when("/projects", {
        templateUrl : "app/partials/projects.html"
    })
    .otherwise({
        redirectTo: '/'
    }); 
});