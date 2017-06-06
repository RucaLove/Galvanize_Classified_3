(function() {

    angular.module("classifieds", [])
        .component('ads', {
            controller: controller,
            templateUrl: './views/ads.html'
        })

    function controller(AdService) {

        const vm = this;
        vm.createAd = createAd
        vm.deleteAd = deleteAd
        vm.editAd = editAd

        vm.$onInit = function() {
            AdService.getAd()
                .then(function(data) {
                    // console.log(data);
                    vm.ads = data
                })
        }

        // vm.toggleAdForm = toggleAdForm
        // function toggleAdForm() {
        //   vm.newAd = !vm.newAd
        // }

        function createAd() {
            AdService.newAd(vm.ad)
        }

        function deleteAd(e) {
            // console.log(vm.ad);
            var id = e.target.id;
            AdService.deleteAd(id)
                .then(function() {
                    AdService.getAd()
                        .then(function(data2) {
                            vm.ads = data2;
                        })
                })
        }

        function editAd(a,b,c,d,e) {
          console.log(a,b,c,d,e);
          var formObj = {
            id: a,
            title: b,
            price: c,
            description: d,
            item_image: e
          }
          AdService.patchAd(formObj)
          .then(function(){
            AdService.getAd()
            .then(function(data2) {
              console.log(data2);
              vm.ad = data2;
            })
          })
        }

    }

})()
