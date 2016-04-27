/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
angular.module('crudModule', [])
    .controller('crudController',
        function($scope) {
            var data = [
                {Id:101, Name: 'Airi Satou', Position: 'Accountant', Office: 'London', Age: 20, StartDate: '2008/11/28', Salary: 162700 },
                {Id:102, Name: 'Caesar Vance', Position: 'Chief Executive Officer (CEO)', Office: 'New York', Age: 30, StartDate: '2011/05/03', Salary: 162700 },
                {Id:103, Name: 'Ashton Cox', Position: 'Software Engineer', Office: 'New York', Age: 40, StartDate: '2011/12/06', Salary: 162700 },
                {Id:104, Name: 'Brielle Williamson', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: '2011/06/07', Salary: 162700 },
                {Id:105, Name: 'Cedric Kelly	', Position: 'Accountant', Office: 'San Francisco', Age: 20, StartDate: '2011/06/07', Salary: 162700 },
                {Id:106, Name: 'Bruno Nash', Position: 'Software Engineer', Office: 'San Francisco', Age: 20, StartDate: '2012/03/29', Salary: 162700 },
                {Id:107, Name: 'Brenden Wagner', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: '2012/03/29', Salary: 162700 }
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
                    Salary: $scope.Salary
                });
                $scope.Name = '';
                $scope.Position = '';
                $scope.Office = '';
                $scope.Age = '';
                $scope.StartDate = '';
                $scope.Salary = '';
                $('#myModal').hide();
                $('.modal-backdrop').removeClass('modal-backdrop');
            };
            $scope.edit = function (id) {
                $('#' + id).hide();
                $('#Edit_' + id).removeClass('ng-hide');
            };
            $scope.delete = function(id) {
                $('#tbody_'+id).remove();
            };
            $scope.cancel = function(id) {
                $('#' + id).show();
                $('#Edit_' + id).addClass('ng-hide');
            };
            $scope.save = function (id) {
                for (var i=0;i<data.length-1;i++) {
                    if (data[i].Id === id) {
                        data[i].Name = $('#txtEditName_' + id).val();
                        data[i].Position = $('#txtEditPosition_' + id).val();
                        data[i].Office = $('#txtEditOffice_' + id).val();
                        data[i].Age = Number($('#txtEditAge_' + id).val());
                        data[i].StartDate = $('#txtEditStartDate_' + id).val();
                        data[i].Salary = Number($('#txtEditSalary_' + id).val());
                    }
                }
                $scope.cancel(id);
            };
        });


