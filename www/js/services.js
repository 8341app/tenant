function LandlordAPI($http, $q) {
  var url = "https://53itz1tr4j.execute-api.us-east-1.amazonaws.com/staging/";
  // var url = "https://g28dse4xfi.execute-api.us-east-1.amazonaws.com/production/";

  this.get = function(collection, params){
    var deferred = $q.defer();
    $http.get(url + collection, {params: params})
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
    $http.post(url + collection, data)
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
