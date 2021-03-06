'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster', 
    'angularMoment'
  ])
  .constant('FURL', 'https://task-guru.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',   
        controller: 'BrowseController'   
      })
      .when('/login', { 
          templateUrl: 'views/login.html',
          controller: 'AuthController'
        })
      .when('/register', { 
          templateUrl: 'views/register.html',
          controller: 'AuthController'
        })
      //.when('/post', { 
          //templateUrl: 'views/post.html',
          //controller: 'TaskController'
        //})
      //.when('/edit/:taskId', { 
          //templateUrl: 'views/edit.html',
          //controller: 'TaskController'
        //})
      .when('/browse/:taskId', { 
          templateUrl: 'views/browse.html',
          controller: 'BrowseController'
        })
      .otherwise({
        redirectTo: '/'
      });
  });