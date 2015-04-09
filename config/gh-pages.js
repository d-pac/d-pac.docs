"use strict";

module.exports = function( grunt,
                           opts ){
  return {
    options : {
      base : "dist"
    },
    src     : [ "**" ]
  };
};
