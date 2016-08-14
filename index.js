
angular.module("dribbble", []).controller('ShotsCtrl', function ($http) {
    var vm = this
    var params = {
        crossDomain:true,
        headers: {
            Authorization: 'Bearer 4780d2b9556f4bf3e1ba540c50e0727577891b840b6ca90cd1b2722e83f244d3'
        }
    }

    $http.get('https://api.dribbble.com/v1/shots', params).then(function(response){
        vm.shots = response.data

    })
})

