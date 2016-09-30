'use strict';

angular.module('emission.main.goals.challenges',['emission.services', 'ngSanitize', 'ngAnimate', 'angularLocalStorage'])

.controller("GoalsChallengesCtrl", function($scope, $http, $ionicPopup,
                                    storage, CommHelper, ReferHelper) {
  console.log("controller GoalsChallengesCtrl called");
});
