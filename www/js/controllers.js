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
      // console.log(data);
    });
  };

})

.controller('allRequestsCtrl', function($scope, landlord) {
  $scope.get_requests = function() {
    landlord.get('requests').then(function(data) {
      $scope.count = data['Count'];
      $scope.all_requests = data['Items'];
      $scope.$broadcast('scroll.refreshComplete');
      console.log(data);
    });
  };

  $scope.get_requests();
})

.controller('logInCtrl', function($scope) {

})

.controller('signUpCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
