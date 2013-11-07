# CoffeeScript

administratorController = angular.module 'administratorController', []

administratorController.controller 'LoadTenantCtrl', ['$scope', 'Tenant', 'Tree',
    ($scope, Tenant, Tree) -> 
        $scope.tenant = Tenant.query()
        $scope.treedata = Tree.query()
]