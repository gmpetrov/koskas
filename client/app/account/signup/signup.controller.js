'use strict';

angular.module('tutoFullStackApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          adresse : $scope.user.adresse,
          company_name : $scope.company_name,
          tva : $scope.tva
        })
        .then( function() {
          // Account created, redirect to home
             Auth.logout();
//          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    console.log(location.path);

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
