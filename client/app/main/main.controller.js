'use strict';

angular.module('tutoFullStackApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.awesomeThings = [];

        $(function() {
            $('#scotch-panel').scotchPanel({
                containerSelector: 'body',
                direction: 'right',
                duration: 300,
                transition: 'ease',
                clickSelector: '.toggle-panel',
                distanceX: '100%',
                enableEscapeKey: true
            });
        });

        $(function(){
             $('#commande-view').scotchPanel({
                containerSelector: 'body',
                direction: 'left',
                duration: 300,
                transition: 'ease',
                clickSelector: '.toggle-panel-view',
                distanceX: '100%',
                enableEscapeKey: true
            });
        });

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function(user) {
//      if($scope.name === ''  || $scope.description === '') {
//        return;
//      }
      $http.post('/api/things', { name: $scope.name, description : $scope.description, date : Date.now(), user : user , read : false });
      $scope.name = '';
      $scope.description = '';
//      jQuery('#newCommandeModal').modal('hide');
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.currentThing = null;
    $scope.test = 42;
    $scope.showThing = function(thing){
        $scope.currentThing = thing;
        $('#commande-view').scotchPanel({
            containerSelector: 'body',
            direction: 'left',
            duration: 300,
            transition: 'ease',
            clickSelector: '.toggle-panel-view',
            distanceX: '100%',
            enableEscapeKey: true
        }).toggle();
        $http.put('/api/things/' + thing._id, { read : true });
    };

    $scope.closePanel = function(){
        $('#commande-view').scotchPanel({
            containerSelector: 'body',
            direction: 'left',
            duration: 300,
            transition: 'ease',
            clickSelector: '.toggle-panel-view',
            distanceX: '100%',
            enableEscapeKey: true
        }).toggle();
    };

//    $scope.btnOpen = function(){
//        $('#add-btn').scotchPanel({
//            containerSelector: '#parent',
//            direction: 'top',
//            duration: 300,
//            transition: 'ease',
////            clickSelector: '.toggle-panel-view',
//            distanceX: '100%',
//            enableEscapeKey: true
//        }).toggle();
//    };

  });