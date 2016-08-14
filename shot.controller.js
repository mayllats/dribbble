
angular.module("dribbble").controller('ShotsCtrl', function (ShotService) {
    var vm = this
    
   ShotService.all().then(function(response){
        vm.shots = response.data
    })
    
})

