
/// <reference path="E:\study-stuff\Angular-Demos\Angular1\Angular1\Scripts/angular.min.js" />
/// <reference path="Factory.js" />


var mainController = angular.module("mainApp");
mainController.controller('crudController', function ($scope) {
    var data = [
        {
            Id: 101, Name: 'Airi Satou', Position: 'Accountant', Office: 'London', Age: 20, StartDate: new Date(2008, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        },
        {
            Id: 102, Name: 'Caesar Vance', Position: 'Chief Executive Officer (CEO)', Office: 'New York', Age: 30, StartDate: new Date(2009, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        },
        {
            Id: 103, Name: 'Ashton Cox', Position: 'Software Engineer', Office: 'New York', Age: 40, StartDate: new Date(2010, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        },
        {
            Id: 104, Name: 'Brielle Williamson', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: new Date(2008, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        },
        {
            Id: 105, Name: 'Cedric Kelly	', Position: 'Accountant', Office: 'San Francisco', Age: 20, StartDate: new Date(2012, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        },
        {
            Id: 106, Name: 'Bruno Nash', Position: 'Software Engineer', Office: 'San Francisco', Age: 20, StartDate: new Date(2014, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        },
        {
            Id: 107, Name: 'Brenden Wagner', Position: 'Junior Technical Author', Office: 'London', Age: 20, StartDate: new Date(2013, 11, 28), Salary: 162700, NormalEdit: true,
            InlineEdit: false
        }
    ];
    $scope.dynamicId = 108;
    $scope.EmployeeData = data;
    $scope.AddInfo = {};
    $scope.AddInfo.Agree = false;
    $scope.Add = function () {
        data.push({
            Id: $scope.dynamicId = $scope.dynamicId + 1,
            Name: $scope.Name,
            Position: $scope.Position,
            Office: $scope.Office,
            Age: $scope.Age,
            StartDate: $scope.StartDate,
            Salary: $scope.Salary,
            NormalEdit: true,
            InlineEdit: false
        });
        $scope.Name = '';
        $scope.Position = '';
        $scope.Office = '';
        $scope.Age = '';
        $scope.StartDate = '';
        $scope.Salary = '';
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
    $scope.cancel = function (id) {
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
        for (i in data) {
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
    $scope.reset = function (form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
    };
    $scope.reset();
});
mainController.controller('dialController', function ($scope) {
    var mesaage = "", timeSequence = 2000,
    dialObject = {
        one: { array: ['.', '?', 1], compareTime: 0, i: undefined, j: undefined },
        two: { array: ['A', 'B', 'C', 2], compareTime: 0, i: undefined, j: undefined },
        three: { array: ['D', 'E', 'F', 3], compareTime: 0, i: undefined, j: undefined },
        five: { array: ['J', 'K', 'L', 5], compareTime: 0, i: undefined, j: undefined },
        four: { array: ['G', 'H', 'I', 4], compareTime: 0, i: undefined, j: undefined },
        six: { array: ['M', 'N', 'O', 6], compareTime: 0, i: undefined, j: undefined },
        seven: { array: ['P', 'Q', 'R', 'S', 7], compareTime: 0, i: undefined, j: undefined },
        eigth: { array: ['T', 'U', 'V', 8], compareTime: 0, i: undefined, j: undefined },
        nine: { array: ['W', 'X', 'Y', 'Z', 9], compareTime: 0, i: undefined, j: undefined }
    };
    $scope.dial = mesaage;
    $scope.space = function () {
        mesaage = mesaage + " ";
        $scope.dial = mesaage;
    };
    $scope.backSpace = function () {
        var newMessage = mesaage.substring(0, mesaage.length - 1);
        mesaage = newMessage;
        $scope.dial = newMessage;
    };
    $scope.mainLogic = function (arrayType) {
        var obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eigth', 9: 'nine' };
        for (var k = 1, l = 10; k < l; k++) {
            if (obj[k] != arrayType) {
                dialObject[obj[k]]['compareTime'] = 0;
                dialObject[obj[k]]['i'] = undefined;
            }
        }
        var t2 = performance.now();
        if (dialObject[arrayType]['i'] === 0 || parseInt(t2.toString().split("."), 10) <= (dialObject[arrayType]['compareTime'] + timeSequence)) {
            dialObject[arrayType]['compareTime'] = parseInt(t2.toString().split("."), 10);
            dialObject[arrayType]['j']++;
            if (dialObject[arrayType]['j'] != 0) {
                if (dialObject[arrayType]['i'] < dialObject[arrayType]['array'].length - 1) {
                    dialObject[arrayType]['array'][dialObject[arrayType]['i']++];
                }
                else {
                    dialObject[arrayType]['i'] = 0;
                }
            }
            if (parseInt(t2.toString().split("."), 10) <= (dialObject[arrayType]['compareTime'] + timeSequence)) {
                mesaage = mesaage.substring(0, mesaage.length - 1);
            }
            mesaage = mesaage + dialObject[arrayType]['array'][dialObject[arrayType]['i']];
        }
        else {
            dialObject[arrayType]['compareTime'] = 0; dialObject[arrayType]['i'] = 0; dialObject[arrayType]['j'] = 0;
            mesaage = mesaage + dialObject[arrayType]['array'][dialObject[arrayType]['i']];
        }
        $scope.dial = mesaage;
    };
});
mainController.controller('angController', function () {
    var d = new Date(Date.now());
    this.startDate = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
    this.endDate = function (addValue) {
        var added = d.getFullYear() + Number(addValue);
        return d.getDate() + '/' + d.getMonth() + '/' + added;
    }
});
mainController.controller('factoryController', function ($scope, revenueFactory) {
    $scope.dealers = [];
    revenueFactory.getDealers().success(function (data, status, headers, config) {
        console.log(data.Response);
        $scope.dealers = data;
    }).error(function (data, status, headers, config) {
        console.log(data);
    });
});
