var LoveCalculator = angular.module("lApp",[]);
LoveCalculator.controller("Cntrl",function($scope,$http){
    $scope.mName="";
    $scope.fName="";
    $scope.rsol="";

    $scope.get = function(){
        $http.get(`https://the-love-calculator.p.rapidapi.com/love-calculator?fname=${$scope.mName}&sname=${$scope.fName}`,{
            headers:{
                'X-RapidAPI-Key': '588e496417msh0cff5f37f004394p1cf1b3jsn3045c97bcc93',
		        'X-RapidAPI-Host': 'the-love-calculator.p.rapidapi.com'
        }
        }).then(function(respone){
            $scope.result=respone.data;
            // $scope.rsol = ;
            console.log($scope.result["first name: "])
        })
    }
    



})