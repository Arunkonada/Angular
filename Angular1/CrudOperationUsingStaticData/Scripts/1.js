/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
angular.module('crudModule', [])
    .controller('crudController',
        function($scope) {
            var data = [
                { Name: 'Airi Satou', Position: 'Accountant', Office: 'London', Age: 20, StartDate: '2008/11/28', Salary: 162700 },
                { Name: 'Caesar Vance', Position: 'Chief Executive Officer (CEO)', Office: 'New York', Age: 20, StartDate: '2011/05/03', Salary: 162700 },
                { Name: 'Ashton Cox', Position: 'Software Engineer', Office: 'New York', Age: 20, StartDate: '2011/12/06', Salary: 162700 },
                { Name: 'Brielle Williamson', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: '2011/06/07', Salary: 162700 },
                { Name: 'Cedric Kelly	', Position: 'Accountant', Office: 'San Francisco', Age: 20, StartDate: '2011/06/07', Salary: 162700 },
                { Name: 'Bruno Nash', Position: 'Software Engineer', Office: 'San Francisco', Age: 20, StartDate: '2012/03/29', Salary: 162700 },
                { Name: 'Brenden Wagner', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: '2012/03/29', Salary: 162700 }
            ];
            $scope.EmployeeData = data;
            $scope.Add = function() {
                data.push({
                    Name: $scope.Name,
                    Position: $scope.Position,
                    Office: $scope.Office,
                    Age: $scope.Age,
                    StartDate: $scope.StartDate,
                    Salary: $scope.Salary
                });
            };
            $scope.rowHiding = function() {

            };
        });


