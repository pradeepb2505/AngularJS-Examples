(function(){
    angular.module("Assignment1", [])
    .controller("MessageController", MessageController);
    MessageController.$inject = ["$scope"];
    function MessageController($scope){
        $scope.message = "";
        $scope.lunch = "";
        $scope.getMessage = function(){
            console.log($scope.lunch)
            if($scope.lunch===""){
                $scope.message = "Please enter data first";
            }else if($scope.lunch.split(",").length <=3 ){
                $scope.message = "Enjoy!";
            }else{
                $scope.message = "Too much!";
            }
        }
    }

    
})();