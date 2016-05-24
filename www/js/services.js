function LandlordAPI($http, $q, LANDLORD_API_URL) {
  this.get = function(collection, params){
    var deferred = $q.defer();
    $http.get(LANDLORD_API_URL + collection, {params: params})
    .success( function(data) {
      deferred.resolve(data);
    })
    .error( function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

  this.post = function(collection, data){
    var deferred = $q.defer();
    $http.post(LANDLORD_API_URL + collection, data)
    .success( function(data) {
      deferred.resolve(data);
    })
    .error( function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

};

angular.module('app.services', [])
  .factory('BlankFactory', [function(){}])
  .service('landlord', LandlordAPI);
