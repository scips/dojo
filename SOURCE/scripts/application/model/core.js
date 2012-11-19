// Generated by CoffeeScript 1.4.0
(function() {

  define(['jquery'], function($) {
    var Core;
    return Core = (function() {

      function Core() {}

      Core.prototype.init = function() {
        var _this = this;
        return $('body').bind('keypress', function(e) {
          return _this.dispatch(e.which);
        });
      };

      Core.prototype.dispatch = function(e) {
        return console.log("keypress evt fired " + e.which);
      };

      return Core;

    })();
  });

}).call(this);
