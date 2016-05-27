
/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
var directivesModule = angular.module("mainApp");
directivesModule.directive('loadingBar', [
    '$rootScope', function($rootScope) {
        return{
            link: function(scope, element, attrs) {
                element.addClass('loader');
                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('loader');
                });
                $rootScope.$on('$routeChangeSuccess', function() {
                    element.addClass('loader');
                });
            }
        }
    }
]);
