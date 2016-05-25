angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/tabs/requests');
  $stateProvider
    .state('tabsController.newRequest', {
      url: '/requests',
      views: {
        'tab1': {
          templateUrl: 'templates/newRequest.html'
        }
      }
    })
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
    .state('tabsController.allRequests', {
      url: '/all_requests',
      views: {
        'tab2': {
          templateUrl: 'templates/allRequests.html'
        }
      }
    })

    .state('tabsController.logIn', {
      url: '/login',
      views: {
        'tab3': {
          templateUrl: 'templates/logIn.html'
        }
      }
    })

    .state('signUp', {
      url: '/signup',
      templateUrl: 'templates/signUp.html'
    })

    .state('8341', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/8341.html'
    })

    .state('8341.settings', {
      url: '/settings',
      views: {
        'side-menu21': {
          templateUrl: 'templates/settings.html'
        }
      }
    });

});
