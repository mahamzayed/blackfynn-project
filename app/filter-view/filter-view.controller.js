
// define the 'filterApp' module and 'filterController' controller
angular.module('filterView', [])
    .controller('filterViewCtrl', ['dataService', '$scope', function(dataService, $scope) {


        $scope.showLoading = true;
        $scope.showResults = false;
        $scope.noResults = false;

        // make the api call to get the list of results
        dataService.getSearchResults().then(function(response) {
            $scope.users = response.results;
            $scope.resultCt = response.info.results;
            if ($scope.users.length > 0){
                $scope.showLoading = false;
                $scope.showResults = true;
            }
        });

        $scope.filterName = function(user){

        }

    }]);