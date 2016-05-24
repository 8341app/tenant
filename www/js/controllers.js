angular.module('app.controllers', [])

.controller('newRequestCtrl', function($scope, landlord) {
  $scope.problems = [
    {'text': 'Plumbing', checked: false},
    {'text': 'Noise', checked: false},
    {'text': 'Trash', checked: false},
    {'text': 'Lock-out', checked: false}];

  $scope.submit = function() {
    var payload = {
      'unit': $scope.unit,
      'phone': $scope.phone,
      'problems': $scope.problems
    }

    landlord.post('requests', payload).then(function(data) {
      console.log(data);
    });
  };

})

.controller('allRequestsCtrl', function($scope) {

})

.controller('logInCtrl', function($scope) {

})

.controller('signUpCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
