'use strict';

angular.module('tutoFullStackApp')
    .controller('IndexCtrl', function ($scope, $location, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.route = function(){
            return $location.path();
        };

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.flute = 42;

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });