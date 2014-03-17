(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardHistory = function(delegate) {
    this.delegate = delegate;
  };

  /**
   * Retrieve SickBeard's downloaded/snatched history.
   *
   * @param object args
   *   Optional arguments to be passed with the call.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#history
   */
  SickbeardHistory.prototype.self = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('history', args).then(function(response){
      return response;
    });
  };

  /**
   * Trim SickBeard's history by removing entries greater than 30 days old.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#history.trim
   */
  SickbeardHistory.prototype.trim = function() {
    var delegate  = this.delegate;

    return delegate.cmd('history.trim').then(function(response){
      return response;
    });
  };

  /**
   * Clear SickBeard's history.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#history.clear
   */
  SickbeardHistory.prototype.clear = function() {
    var delegate  = this.delegate;

    return delegate.cmd('history.clear').then(function(response){
      return response;
    });
  };

  module.exports = SickbeardHistory;

})();
