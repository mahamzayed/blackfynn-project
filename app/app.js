'use strict';

// Declare app level module which depends on views, and components
angular.module('filterApp', [
  'ngRoute',
  'filterView'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/filter', {
        template: '<filter-view></filter-view>'
    }).
    otherwise({redirectTo: '/'});
}]);

