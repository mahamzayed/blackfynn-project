
// define the 'filterApp' module and 'filterController' controller
angular.module('filterView', [])
    .controller('filterViewCtrl', ['dataService', '$scope', function(dataService, $scope) {


        // make the api call to get the list of results
        dataService.getSearchResults().then(function(response) {
            console.log("what do we have as our response ", response);
            $scope.resultCt = response.info.results;
        });

    }]);