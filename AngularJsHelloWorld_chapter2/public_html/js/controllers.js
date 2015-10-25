/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
/*Controladores*/

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http', 
    function MainCtrl($scope, $location, $http) {
        $scope.message = "Hello World";
}]);

helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http', 
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show the World";
}]);