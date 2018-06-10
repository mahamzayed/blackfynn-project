'use strict';

angular.module('filterApp').service('dataService', ['$http', function ($http) {

    this.getSearchResults = function() {
        var request = {
            method: 'GET',
            url: configData.url
        };
        return $http(request)
            .then(function (response) {
                return response.data;
            }, function (error) {
                return error.data;
            });
    };
}]);