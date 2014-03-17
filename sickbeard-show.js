(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardShow = function(delegate) {
    this.delegate = delegate;
  };

  /**
   * Display information for a given show.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show
   */
  SickbeardShow.prototype.self = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show', args).then(function(response){
      return response;
    });
  };

  /**
   * Add a show to SickBeard using an existing folder.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:          tvdbid unique show id
   *     location:        path to existing show folder
   *     flatten_folders: 0 - use season folders if part of rename string
   *                      1 - do not use season folders
   *     initial:         initial quality, multiple types can be passed when delimited by |
   *              					sdtv, sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl,
   *              					fullhdwebdl, hdbluray, fullhdbluray, unknown
   *     archive:         multiple types can be passed when delimited by |
   *              					sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl,
   *              					fullhdwebdl, hdbluray, fullhdbluray
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.addexisting
   */
  SickbeardShow.prototype.addExisting = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.addexisting', args).then(function(response){
      return response;
    });
  };

  /**
   * Add a show to SickBeard providing the parent directory where the tv shows folder should be created.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:          tvdbid unique show id
   *     location:        path to create show folder
   *     lang: 						two letter tvdb language, en  = english
   *     status:          wanted, skipped, archived, ignored
   *     flatten_folders: 0 - use season folders if part of rename string
   *                      1 - do not use season folders
   *     initial:         initial quality, multiple types can be passed when delimited by |
   *              					sdtv, sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl,
   *              					fullhdwebdl, hdbluray, fullhdbluray, unknown
   *     archive:         multiple types can be passed when delimited by |
   *              					sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl,
   *              					fullhdwebdl, hdbluray, fullhdbluray
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.addnew
   */
  SickbeardShow.prototype.addNew = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.addnew', args).then(function(response){
      return response;
    });
  };

  /**
   * Display if the poster/banner SickBeard's image cache is valid.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.cache
   */
  SickbeardShow.prototype.cache = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.cache', args).then(function(response){
      return response;
    });
  };

  /**
   * Delete a show from SickBeard.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.delete
   */
  SickbeardShow.prototype.delete = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.delete', args).then(function(response){
      return response;
    });
  };

  /**
   * Retrieve the stored banner image from SickBeard's cache for a particular tvdbid.
   * If no image is found then the default sb banner is shown.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *
   * @return image
   *
   * @see http://sickbeard.com/api/#show.getbanner
   */
  SickbeardShow.prototype.getBanner = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.getbanner', args).then(function(response){
      return response;
    });
  };

  /**
   * Retrieve the stored poster image from SickBeard's cache for a particular tvdbid.
   * If no image is found then the default sb poster is shown.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *
   * @return image
   *
   * @see http://sickbeard.com/api/#show.getposter
   */
  SickbeardShow.prototype.getPoster = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.getposter', args).then(function(response){
      return response;
    }).catch(function(error){
      console.log(error);
    });
  };

  /**
   * Get quality settings of a show in SickBeard.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid:  tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.getquality
   */
  SickbeardShow.prototype.getQuality = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.getquality', args).then(function(response){
      return response;
    });
  };

  /**
   * Set a show's paused state in SickBeard.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *     pause:  0 - unpause show
   *             1 - pause show
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.pause
   */
  SickbeardShow.prototype.pause = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.pause', args).then(function(response){
      return response;
    });
  };

  /**
   * Refresh a show in SickBeard by rescanning local files.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.refresh
   */
  SickbeardShow.prototype.refresh = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.refresh', args).then(function(response){
      return response;
    });
  };

  /**
   * Retrieve the season list for a given show.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *     sort:   asc, [desc]
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.seasonlist
   */
  SickbeardShow.prototype.seasonList = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.seasonlist', args).then(function(response){
      return response;
    });
  };

  /**
   * Retrieve a listing of episodes for all or a given season.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *     season: season number
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.seasons
   */
  SickbeardShow.prototype.seasons = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.seasons', args).then(function(response){
      return response;
    });
  };

  /**
   * Set desired quality of a show in SickBeard.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *     initial: multiple types can be passed when delimited by |
   *              	sdtv, sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl, fullhdwebdl,
   *              	hdbluray, fullhdbluray, unknown
   *     archive: multiple types can be passed when delimited by |
   *              	sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl, fullhdwebdl,
   *              	hdbluray, fullhdbluray
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.setquality
   */
  SickbeardShow.prototype.setQuality = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.setquality', args).then(function(response){
      return response;
    });
  };

  /**
   * Retrieve episode statistics for a given show.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.stats
   */
  SickbeardShow.prototype.stats = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.stats', args).then(function(response){
      return response;
    });
  };

  /**
   * Update a show in SickBeard by pulling down information from TVDB and rescan local files.
   *
   * @param object args
   *   Arguments to be passed with the call:
   *     tvdbid: tvdbid unique show id
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#show.update
   */
  SickbeardShow.prototype.update = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('show.update', args).then(function(response){
      return response;
    });
  };

  module.exports = SickbeardShow;

})();
