'use strict';

angular.module('emission.main.goals.party',['emission.services', 'ngSanitize', 'ngAnimate', 'angularLocalStorage'])

.controller("GoalsPartyCtrl", function($scope, $http, $ionicPopup,
                                    storage, CommHelper, ReferHelper) {
  console.log("controller GoalsPartyCtrl called");
});
