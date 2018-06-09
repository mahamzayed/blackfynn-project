
// define the 'filterApp' module and 'filterController' controller
angular.module('filterView', [])
    .component('filterUser', {
        template: 'filter-view/filter-view.template.html',
        controller: ['$http', function filterUser($http) {
            var self = this;
            self.filterText = "this is my filter dummy text";

            // modify later
            $http.get('https://randomuser.me/api/?results=100').then(function(response) {
                self.phones = response.data;
            });

        }]});