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

    app.controller('PageCtrl', ['$scope', 'filterFilter', function($scope, filterFilter) {
        $scope.items = [{
            id: "L001",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }, {
            id: "L002",
            name: "客户设计体验",
            teacher: "阿娇和大桔",
            intro: "针对目标客户体验反馈和流程方面的问题解决方案和总结。",
            time: "2015-12-07 10:30～16:30 ",
            address: "上海市浦东新区XX酒店",
            imgUrl: "img/course.png"
        }];

        // create empty search model (object) to trigger $watch on update
        $scope.search = {};

        $scope.resetFilters = function() {
            // needs to be a function or it won't trigger a $watch
            $scope.search = {};
        };

        // pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.items.length;
        $scope.entryLimit = 7; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

        // $watch search to update pagination
        $scope.$watch('search', function(newVal, oldVal) {
            $scope.filtered = filterFilter($scope.items, newVal);
            $scope.totalItems = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
            $scope.currentPage = 1;
        }, true);
    }]);