'use strict';

angular.module('emission.main.goals',['emission.main.goals.goalhome',
                                      'emission.main.goals.challenges',
                                      'emission.main.goals.party',
                                      'emission.services'])
.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider) {
  $stateProvider

  .state('root.main.goals.goalhome', {
    url: '/goalhome',
    views: {
        'menuContent': {
            templateUrl: 'templates/goals/goal-home.html',
            controller: 'GoalsHomeCtrl'
        }
     }
  })

  .state('root.main.goals.challenges', {
    url: '/challenges',
    views: {
      'menuContent': {
        templateUrl: 'templates/goals/goal-challenges.html',
        controller: 'GoalsChallengesCtrl'
      }
    }
  })

  .state('root.main.goals.party', {
    url: '/party',
    views: {
      'menuContent': {
        templateUrl: 'templates/goals/goal-party.html',
        controller: 'GoalsPartyCtrl'
      }
    }
  })

})

.controller("GoalsCtrl", function($scope, $http, $ionicPopup,
                                    CommHelper, ReferHelper) {
  console.log("controller GoalsCtrl called");
});

