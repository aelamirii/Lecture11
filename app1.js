(function () {
'use strict'

angular.module('MsgApp', [])

.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {

$scope.name = "Abdelhay";

$scope.StatusofBeing = "1";

$scope.feed = function() {
  $scope.StatusofBeing = "2";
};


};


})();
