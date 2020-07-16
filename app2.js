(function () {
'use strict'

angular.module('MsgApp', [])

.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {

$scope.name = "Abdelhay";

$scope.StatusOfBeing = "1";

$scope.feed = function () {
  $scope.StatusOfBeing = "2";

}


}


})();
