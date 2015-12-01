    var app = angular.module('myApp', ['ui.bootstrap']);


    app.filter('startFrom', function() {
        return function(input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    });

    app.controller('PageCtrl', ['$scope', '$http', 'filterFilter', function($scope, $http, filterFilter) {

        $http.get('http://121.40.113.6/api/GetTagSet?projectType=IT').success(function(data) {
            $scope.tagitems = data;
        });

        $http.get('http://121.40.113.6/api/GetProjectSet?projectType=IT').success(function(data) {
            $scope.items = data;
            // pagination controls
            $scope.currentPage = 1;
            $scope.totalItems = $scope.items.length;
            $scope.entryLimit = 5; // items per page
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
            if ($scope.noOfPages < 2) {
                $scope.paginationShow = false;
            } else {
                $scope.paginationShow = true;
            };


            // create empty search model (object) to trigger $watch on update
            $scope.search = {};

            $scope.resetFilters = function() {
                // needs to be a function or it won't trigger a $watch
                $scope.search = {};
            };


            // $watch search to update pagination
            $scope.$watch('search', function(newVal, oldVal) {
                $scope.filtered = filterFilter($scope.items, newVal);
                $scope.totalItems = $scope.filtered.length;
                $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                $scope.currentPage = 1;
                if ($scope.noOfPages < 2) {
                    $scope.paginationShow = false;
                } else {
                    $scope.paginationShow = true;
                };
            }, true);

        });

        $scope.dipbyTagV = function(tag) {

            // alert("Hello Alice");
            $http.get('http://121.40.113.6/api/GetProjectSet?projectType=IT&tagv=' + tag.tag).success(function(data) {
                $scope.items = data;
                $scope.totalItems = $scope.items.length;
                $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                if ($scope.noOfPages < 2) {
                    $scope.paginationShow = false;
                } else {
                    $scope.paginationShow = true;
                };

            });
        };
    }]);