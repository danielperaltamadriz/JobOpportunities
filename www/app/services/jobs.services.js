(function(){
        "use strict";
        angular
            .module('app.core')
            .factory('jobService', jobService);
        function jobService($firebaseArray) {
                var jobLists;
                var ref;
                var service = {
                        init:init,
                        addJobs: addJobs,
                        getJobs: getJobs
                };
                return service;

                function init() {
                        ref = firebase.database().ref().child('jobs');
                        jobLists = $firebaseArray(ref);
                }

                function addJobs(job){
                        console.log('Add: ', JSON.stringify(job));
                        jobLists.$add(job);
                }

                function getJobs(){
                        return jobLists;
                }
        }
})();