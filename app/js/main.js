define('jquery', [], function() {
  return jQuery;
});

require.config({
  paths: {
    underscore: 'vendor/underscore-amd/underscore',
    backbone: 'vendor/backbone-amd/backbone'
  }
});

require([
  'app'
], function(App) {
  App.initialize();
});