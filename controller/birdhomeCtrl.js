    function QueryString(item) {
        var sValue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"))
        return sValue ? sValue[1] : sValue
    }
    id = QueryString("id");
    var app = angular.module('myApp', ['ui.bootstrap']);

    app.controller('PageCtrl', ['$scope', '$http', function($scope, $http) {

        $http.get('http://121.40.113.6/api/GetBirdDetail?id=' + id).success(function(data) {
            $scope.details = data;

        });


    }]);