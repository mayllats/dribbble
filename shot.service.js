function ShotService($http){
    var params = {
        crossDomain:true,
        headers: {
            Authorization: 'Bearer 4780d2b9556f4bf3e1ba540c50e0727577891b840b6ca90cd1b2722e83f244d3'
        }
    }

    return {
        all: function(){
            return $http.get('https://api.dribbble.com/v1/shots', params) 
        }
    }
}

angular.module('dribbble').service('ShotService', ShotService)