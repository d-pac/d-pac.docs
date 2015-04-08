"use strict()";

module.exports = function( grunt ){
  // Load grunt tasks automatically
  require( "jit-grunt" )( grunt, {
    "mochacli"    : "grunt-mocha-cli",
    "buildnumber" : "grunt-build-number"
  } );

  var configs = require( "load-grunt-configs" )( grunt );

  // Project configuration.
  grunt.initConfig( configs );
};
