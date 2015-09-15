angular
  .module('example')
  .controller('FormController', function($scope) {
    Parse.initialize("W9uXFiwaQ0ZNx4oG0JWC7rbWZHtA3w9bi1LxfqQd", "HZgOleLtk18UAtDCFyA4lMIZBtA0tQus2qXyzSC4");


    $scope.submit = function() {
      supersonic.loggger.info("loaded function");
          var user = new Parse.User();
            user.set("username", $scope.username);
            user.set("password", $scope.password);
            user.set("email", $scope.email);

            // other fields can be set just like with Parse.Object
            user.set("phone", "650-555-0001");

            supersonic.loggger.info(user);
            user.signUp(null, {
              success: function(user) {
                // Hooray! Let them use the app now.
                supersonic.loggger.info("user added");
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                supersonic.logger.error("Error: " + error.code + " " + error.message);
              }
    });

    }





    $scope.testDataConnection = function(){
      supersonic.logger.info("data connect started.");
      var TestObject = Parse.Object.extend("TestObject");
      //supersonic.logger.info(TestObject);
      var testObject = new TestObject();
        testObject.save({foo: "bar"}).then(function(object) {
          supersonic.logger.info("data connect worked.");
});
    }



    $scope.createUser = function(){

      var user = new Parse.User();
        user.set("username", "Name 2");
        user.set("password", "my pass");
        user.set("email", "email2@example.com");

        // other fields can be set just like with Parse.Object
        user.set("phone", "650-555-0001");

        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            supersonic.loggger.info("user added");
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            supersonic.logger.error("Error: " + error.code + " " + error.message);
          }
});

    }

  });
