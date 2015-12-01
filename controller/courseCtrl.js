 var app = angular.module('myApp', ['ui.bootstrap']);

    app.controller('PageCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.dispmsg = false;

        $scope.joinus = function() {

            var postData = {
                username: $scope.user.name,
                userphone: $scope.user.phone,
                useremail: $scope.user.mail,

            };
            var config = {
                params: {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                }
            };

            $.post('http://121.40.113.6/api/RegCourse', postData, function() {
                //alert('success');
                // $scope.notifymsg
                $scope.dispmsg = true;
                $scope.$apply();

            });
        }


    }]);