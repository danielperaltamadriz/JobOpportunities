(function() {
  'use strict';
  angular
      .module('app.main')
      .controller('MainCtrl', MainCtrl);
  /* @ngInject */
  function MainCtrl(jobService) {
    var vm = this;
    vm.headers =['Name of the Company',
                  'Post',
                  'Base salary',
                  'Weekly hours',
                  'Perks',
                  'Disadvantages',
                  'Localization',
                  'Requirements',
                  'Date',
                  'Link'];
    vm.getJobs = jobService.getJobs;
    activate();
    function activate() {
      jobService.init();
    }
  }
})();
