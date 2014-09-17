'use strict';

angular.module('tutoFullStackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main2.html',
        controller: 'MainCtrl',
        authenticate: true
      });
  });