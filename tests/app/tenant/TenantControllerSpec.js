
/*
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
*/

(function() {


  describe('AngularJS controllers', function() {
    beforeEach(module('administratorApp'));
    return describe('LoadTenantCtrl', function() {
      return it('should load the tenant details', inject(function($controller) {
        var ctrl, scope;
        scope = {};
        ctrl = $controller('LoadTenantCtrl', {
          $scope: scope
        });
        return expect(scope.tenant.length).toBe(3);
      }));
    });
  });

}).call(this);
