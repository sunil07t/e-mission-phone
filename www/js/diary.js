angular.module('emission.main.diary',['emission.main.diary.list',
                                      'emission.main.diary.detail',
                                      'emission.main.diary.services',
                                      'emission.main.diary.current',
                                      'emission.main.diary.editMode',])

.config(function($stateProvider) {
  $stateProvider
  .state('root.main.diary', {
    url: '/diary',
    views: {
      'main-diary': {
        templateUrl: 'templates/diary/list.html',
        controller: 'DiaryListCtrl'
      }
    }
  })

  .state('root.main.diary-detail', {
    url: '/diary/:tripId',
    views: {
        'main-diary': {
            templateUrl: 'templates/diary/detail.html',
            controller: 'DiaryDetailCtrl'
        }
     }
  })

  .state('root.main.current', {
      url: "/current",
      views: {
        'main-diary': {
          templateUrl: "templates/diary/current.html",
          controller: 'CurrMapCtrl'
        },
      }
      
  })

  .state('root.main.diary-edit-mode', {
    url: '/diary/:tripId/:tripId2',
    views: {
        'main-diary': {
            templateUrl: 'templates/diary/edit-mode.html',
            controller: 'EditModeCtrl'
        }
     }
  });
});
