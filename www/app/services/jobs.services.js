(function(){
        "use strict";
        angular
            .module('app.core')
            .factory('jobService', jobService);
              /* @ngInject */
        function jobService($firebaseArray, ionicToast) {
                var jobLists;
                var ref;
                var service = {
                        init:init,
                        addJobs: addJobs,
                        getJobs: getJobs
                };
                return service;
                var vm = this;
                vm.hideToast = hideToast;

                function init() {
                        ref = firebase.database().ref().child('jobs');
                        jobLists = $firebaseArray(ref);
                }

                function addJobs(job){                      
                        jobLists.$add(job).then(function (resolve){
                                 
                        });
                        ionicToast.show('Job Posstion Added', 'Top',false, 2000);
                }            

                function getJobs(){
                        return jobLists;
                }
        }
})();