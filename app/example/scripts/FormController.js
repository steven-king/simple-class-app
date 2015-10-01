angular
  .module('example')
  .controller('FormController', function($scope) {

    $scope.formParse = function(form) {
      supersonic.logger.info(form);
      supersonic.logger.info($scope.name);

      var user = new Parse.User();
        user.set("username", $scope.name);
        user.set("password", "my pass");
        user.set("email", $scope.email);

        // other fields can be set just like with Parse.Object
        user.set("phone", "650-555-0001");

        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            supersonic.logger.info("user added");
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
