# CoffeeScript

###
/// <reference path="../../../static/lib/angular-1.2.0-rc.3/angular.js" />
/// <reference path="../../../static/lib/angular-1.2.0-rc.3/angular-route.js" />
/// <reference path="../../../static/lib/angular-1.2.0-rc.3/angular-resource.js" />
/// <reference path="../../../static/lib/angular.treeview.js" />

/// <reference path="../../lib/angular/angular-mocks.js" />

/// <reference path="../../../static/app/tenant/app.js" />
/// <reference path="../../../static/app/tenant/TenantController.js" />
/// <reference path="../../../static/app/tenant/TenantService.js" />

/// <reference path="../../../static/app/Index.html" />
/// <reference path="../../../static/app/partials/assets.html" />
###

describe 'AngularJS controllers', ->
    beforeEach module 'administratorApp'

    describe 'LoadTenantCtrl', ->
        it 'should load the tenant details', inject ($controller) ->
            scope = {}
            ctrl = $controller 'LoadTenantCtrl', {$scope: scope}

            expect(scope.tenant.length).toBe 3