'use strict';

angular.module('tutoFullStackApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        },
      newCommande: {
          method : 'PUT',
          params : {
            controller: ''
          }
      }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
