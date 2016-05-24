angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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
      url: '/page2',
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
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/page2/requests');
  

  

});