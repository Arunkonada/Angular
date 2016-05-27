/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
var mainRoute = angular.module("mainApp", ["ngRoute"]);
mainRoute.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dial',
        {
            templateUrl: 'HtmlPages/OldMessagePad.html',
            controller: 'dialController'
        }).when('/crud',
        {
            templateUrl: 'HtmlPages/CrudOperationUsingStaticData.html',
            controller: 'crudController'
        }).when('/RateOfInterest',
        {
            templateUrl: 'HtmlPages/RateOfInterest.html',
            controller: 'angController'
        }).when('/dealers',
        {
            templateUrl: 'HtmlPages/Factory.html',
            controller: 'factoryController'
        }).otherwise({ redirectTo: '/dial' });
}]);