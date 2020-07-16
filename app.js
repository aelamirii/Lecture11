(function () {
'use strict'

angular.module('MsgApp' , [])

.controller('MsgController', MsgController);

MsgController.$inject  = ['$scope'];

function MsgController($scope) {
  $scope.name = "Abdelhay";

$scope.stateOfBeing = "2";


  $scope.sayMessage = function () {
    return "Abdelhay likes to eat healthy food!";

  };

  $scope.feed = function () {

  $scope.stateOfBeing = "1";

};

}


})();
