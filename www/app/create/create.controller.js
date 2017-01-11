(function() {
  'use strict';
  angular
      .module('app.create')
      .controller('CreateCtrl', CreateCtrl);
  /* @ngInject */
  function CreateCtrl(jobService) {
    var vm = this;
    vm.create = create;
    activate();
    function activate(){
      vm.activity = {
        companyName: '',
        post: '',
        baseSalary: '',
         weeklyHours: '',
        perks: '',
        disadvantages: '',
        localization: '',
        requirements: '',
        date: '',
        link: ''
      };
    }
    function create() {
      jobService.init();     
      jobService.addJobs(vm.activity);
    }
  }
})();
