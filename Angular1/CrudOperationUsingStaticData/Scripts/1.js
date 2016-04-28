/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
angular.module('crudModule', [])
    .controller('crudController',
        function($scope) {
            var data = [
                {
                     Id: 101, Name: 'Airi Satou',Position: 'Accountant', Office: 'London',Age: 20,StartDate: '2008/11/28',Salary: 162700, NormalEdit: true,
                     InlineEdit:false
                },
                {
                    Id: 102, Name: 'Caesar Vance', Position: 'Chief Executive Officer (CEO)', Office: 'New York', Age: 30, StartDate: '2011/05/03', Salary: 162700, NormalEdit: true,
                    InlineEdit: false
                },
                {
                    Id: 103, Name: 'Ashton Cox', Position: 'Software Engineer', Office: 'New York', Age: 40, StartDate: '2011/12/06', Salary: 162700, NormalEdit: true,
                    InlineEdit: false
                },
                {
                    Id: 104, Name: 'Brielle Williamson', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: '2011/06/07', Salary: 162700, NormalEdit: true,
                    InlineEdit: false
                },
                {
                    Id: 105, Name: 'Cedric Kelly	', Position: 'Accountant', Office: 'San Francisco', Age: 20, StartDate: '2011/06/07', Salary: 162700, NormalEdit: true,
                    InlineEdit: false
                },
                {
                    Id: 106, Name: 'Bruno Nash', Position: 'Software Engineer', Office: 'San Francisco', Age: 20, StartDate: '2012/03/29', Salary: 162700, NormalEdit: true,
                    InlineEdit: false
                },
                {
                    Id: 107, Name: 'Brenden Wagner', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: '2012/03/29', Salary: 162700, NormalEdit: true,
                    InlineEdit: false
                }
            ];
            $scope.dynamicId = 108;
            $scope.EmployeeData = data;
            $scope.Add = function() {
                data.push({
                    Id: $scope.dynamicId = $scope.dynamicId+1,
                    Name: $scope.Name,
                    Position: $scope.Position,
                    Office: $scope.Office,
                    Age: $scope.Age,
                    StartDate: $scope.StartDate,
                    Salary: $scope.Salary,
                    NormalEdit: true,
                    InlineEdit: false
                });
                //$scope.EmployeeData = data;
                //$scope.Name = '';
                //$scope.Position = '';
                //$scope.Office = '';
                //$scope.Age = '';
                //$scope.StartDate = '';
                //$scope.Salary = '';
                $('#myModal').hide();
                $('.modal-backdrop').removeClass('modal-backdrop');
            };
            $scope.edit = function (id) {
                var i;
                for (i in data) {
                    if (data[i].Id === id) {
                        data[i].NormalEdit = false;
                        data[i].InlineEdit = true;
                    }
                };
            };
            $scope.delete = function (id) {
                var i;
                for (i in data) {
                    if (data[i].Id === id) {
                        data.splice(i, 1);
                    }
                };
            };
            $scope.cancel = function(id) {
                var i;
                for (i in data) {
                    if (data[i].Id === id) {
                        data[i].NormalEdit = true;
                        data[i].InlineEdit = false;
                    }
                };
            };
            $scope.save = function (id, name, position, office, age, startDate, salary) {
                var i;
                for (i  in data) {
                    if (data[i].Id === id) {
                        data[i].Name = name;
                        data[i].Position = position;
                        data[i].Office = office;
                        data[i].Age = Number(age);
                        data[i].StartDate = startDate;
                        data[i].Salary = Number(salary);
                    }
                }
                $scope.cancel(id);
            };
        });


