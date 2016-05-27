/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
var mainFactory = angular.module("mainApp");

mainFactory.factory("revenueFactory", function ($http) {
    var factoryObj = {};
    factoryObj.getDealers = function () {
        return $http.get("http://localhost/Angular/Api/dealers/get");
    }
    factoryObj.getRmds = function () {
        return $http.get("http://dev.teamvelocityportal.com/RevenueTracker/api/rmds/get");
    }
    return factoryObj;
})