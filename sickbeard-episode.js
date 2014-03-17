(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardEpisode = function(delegate) {
    this.delegate = delegate;
  };

  /**
   * Retrieve the information of a specific episode matching the corresponding
   * tvdbid, season and episode number.
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
      return response;
    });
  };

  /**
   * Initiate a search for a specific episode matching the corresponding tvdbid,
   * season and episode number.
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
      return response;
    });
  };

  /**
   * Set the status of an epsiode or season.
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
      return response;
    });
  };

  module.exports = SickbeardEpisode;

})();
