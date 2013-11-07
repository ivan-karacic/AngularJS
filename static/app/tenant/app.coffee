# CoffeeScript

administratorApp = angular.module 'administratorApp', [
    'ngRoute',
    'angularTreeview',
    'administratorController',
    'administratorService'
]

administratorApp.config ['$routeProvider', ($routeProvider) -> 
    $routeProvider.when '/', {templateUrl: 'tenant/partials/assets.html', controller: 'LoadTenantCtrl'}
]