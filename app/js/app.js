define([
  'underscore',
  'backbone',
], function(_, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    console.log("Hello");
  }

  return {
    initialize: initialize
  };
});