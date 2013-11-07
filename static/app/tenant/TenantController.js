(function() {
  var administratorController;



  administratorController = angular.module('administratorController', []);

  administratorController.controller('LoadTenantCtrl', [
    '$scope', 'Tenant', 'Tree', function($scope, Tenant, Tree) {
      $scope.tenant = Tenant.query();
      return $scope.treedata = Tree.query();
    }
  ]);

}).call(this);
