(function () {
  'use strict';
  
  angular.module("LunchCheck", [])
  .controller("LunchCtrl", LunchCheckController);
  
  LunchCheckController.$inject = ["$scope"];
  
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    
    // this func is assigned to ng-click
    $scope.countLunch = function () {
      var messg = сalculateLunchNumber($scope.lunch);
      $scope.message = messg;
    };
    
    function сalculateLunchNumber (array) {
      var lunchList = array.split(",");
      
      if (lunchList[0] == "") {
        return "Please enter data first";
      } else if (lunchList.length <= 3) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    }
    
  }
  
}());