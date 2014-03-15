(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardEpisode = function(delegate) {
    this.delegate = delegate;
  };

  /**
   * Call the 'episode' method of the API, and return the data
   * from the call.
   * 
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *     season:  season number
   *     episode: episode number
   *   
   * @return object
   *
   * @see http://sickbeard.com/api/#episode
   */
  SickbeardEpisode.prototype.self = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('episode', args).then(function(response){
      return response.data;
    });
  };

  /**
   * Call the 'episode.search' method of the API, and return the data
   * from the call.
   * 
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *     season:  season number
   *     episode: episode number
   *   
   * @return array
   *
   * @see http://sickbeard.com/api/#episode.search
   */
  SickbeardEpisode.prototype.search = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('episode.search', args).then(function(response){
      return response.data;
    });
  };

  /**
   * Call the 'episode.status' method of the API, and return the data
   * from the call.
   * 
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *     season:  season number
   *     episode: episode number
   *     status:  wanted, skipped, archived, ignored
   * 
   * @return array
   *
   * @see http://sickbeard.com/api/#episode.status
   */
  SickbeardEpisode.prototype.status = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('episode.status', args).then(function(response){
      return response.data;
    });
  };

  module.exports = SickbeardEpisode;

})();