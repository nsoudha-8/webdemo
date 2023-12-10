var app = angular.module('fullNameApp', []);

app.controller('FullNameController', function($scope) {
  // Default values for first name and last name
  $scope.firstName = 'john';
  $scope.lastName = 'doe';

  // Function to concatenate first and last name
  $scope.fullName = function() {
    return $scope.firstName + ' ' + $scope.lastName;
  };
  
});
