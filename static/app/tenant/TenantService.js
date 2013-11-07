(function() {
  var administratorService;



  administratorService = angular.module('administratorService', ['ngResource']);

  administratorService.factory('Tenant', [
    '$resource', function($resource) {
      return $resource('../assets/data/tenant.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }
  ]);

  administratorService.factory('Tree', [
    '$resource', function($resource) {
      return $resource('../assets/data/tenantTree.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }
  ]);

}).call(this);
