(function() {
  'use strict';

  angular
      .module('app')
      .run(run);

  /* @ngInject */
  function run($ionicPlatform) {
    var config = {
      apiKey: "AIzaSyCxB6FqYKwAwopbX9E_IKyOvC60UxVFt8w",
    authDomain: "jobopportunities-df653.firebaseapp.com",
    databaseURL: "https://jobopportunities-df653.firebaseio.com",
    storageBucket: "jobopportunities-df653.appspot.com",
    messagingSenderId: "204894378997"
    };
    firebase.initializeApp(config);

    $ionicPlatform.ready(function() {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

    });
  }

})();
