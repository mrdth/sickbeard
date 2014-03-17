(function() {

  // Sickbeard shows class
  var SickbeardShows = function(delegate) {
    this.delegate = delegate;
  };

  /**
   * Retrieve a list of all shows in SickBeard.
   *
   * @param object args
   *   Optional arguments to be passed with the call.
   *
   * @return object
   *   JSON object describing the shows in the Sickbeard list.
   *
   * @see http://sickbeard.com/api/#shows
   */
  SickbeardShows.prototype.self = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('shows', args).then(function(response){
      return response;
    });
  };

  /**
   * Retrieve global episode and show statistics.
   *
   * @return object
   *   JSON object describing global episode and show statistics.
   */
  SickbeardShows.prototype.stats = function() {
    var delegate  = this.delegate;

    return delegate.cmd('shows.stats').then(function(response){
      return response;
    });
  };

  module.exports = SickbeardShows;

})();
