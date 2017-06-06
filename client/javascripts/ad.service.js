(function() {

    angular.module('classifieds')

    .service('AdService', service)
    service.$inject = ['$http']

    function service($http) {
      const BASE_URL = '/'

      this.getAd = function() {
        return $http.get('/api/classifieds')
          .then(function(payload) {
          return payload.data;
        })
      }


        this.newAd = function(newAd) {
            return $http.post('/api/classifieds', newAd)
        }

        this.deleteAd = function(deleteAd) {
          return $http.delete(`/api/classifieds/${deleteAd}`, deleteAd)
        }

        this.patchAd = function(formObj){
          return $http.patch(`/api/classifieds/${formObj.id}`, formObj)
        }

    }
})()
