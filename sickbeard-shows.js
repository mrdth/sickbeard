(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardShows = function(delegate) {
    this.delegate = delegate;
  };

  module.exports = SickbeardShows;

})();