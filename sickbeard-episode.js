(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardEpisode = function(delegate) {
    this.delegate = delegate;
  };

  module.exports = SickbeardEpisode;

})();