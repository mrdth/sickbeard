(function() {
  var Q = require('q');

  // Sickbeard shows class
  var SickbeardSB = function(delegate) {
    this.delegate = delegate;
  };

  module.exports = SickbeardSB;

  /**
   * Retrieve misc SickBeard related information.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb
   */
  SickbeardSB.prototype.self = function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb').then(function(response){
      return response;
    });
  };

  /**
   * Add a root (parent) directory (only if it is a valid location),
   * and set as the default root dir if requested to SickBeard's config.
   *
   *   @param object args
   *   Arguments to be passed with the call:
   *     location: full path to a root (parent) directory of tv shows
   *     default: [0], 1
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.addrootdir
   */
  SickbeardSB.prototype.addRootDir = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('sb.addrootdir', args).then(function(response){
      return response;
    });
  };

  /**
   * Query the SickBeard scheduler.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.checkscheduler
   */
  SickbeardSB.prototype.checkScheduler = function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.checkscheduler').then(function(response){
      return response;
    });
  };

  /**
   * Delete a root (parent) directory from the root directory list in
   * SickBeard's config.
   *
   *   @param object args
   *   Arguments to be passed with the call:
   *     location: full path to a root (parent) directory of tv shows
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.deleterootdir
   */
  SickbeardSB.prototype.deleteRootDir = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('sb.deleterootdir', args).then(function(response){
      return response;
    });
  };

  /**
   * Force the episode search early.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.forcesearch
   */
  SickbeardSB.prototype.forceSearch = function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.forcesearch').then(function(response){
      return response;
    });
  };

  /**
   * Get default settings from SickBeard's config.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.getdefaults
   */
  SickbeardSB.prototype.getDefaults= function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.getdefaults').then(function(response){
      return response;
    });
  };

  /**
   * Get un-claimed messages from the ui.notification queue.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.getmessages
   */
  SickbeardSB.prototype.getMessages= function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.getmessages').then(function(response){
      return response;
    });
  };

  /**
   * Get the root (parent) directories from SickBeard's config, test if valid,
   * and which is the default.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.getrootdirs
   */
  SickbeardSB.prototype.getRootDirs= function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.getrootdirs').then(function(response){
      return response;
    });
  };

  /**
   * Pause the backlog search.
   *
   *   @param object args
   *   Arguments to be passed with the call:
   *     default: [0], 1
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.pausebacklog
   */
  SickbeardSB.prototype.pauseBacklog = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('sb.pausebacklog', args).then(function(response){
      return response;
    });
  };

  /**
   * Check to see if SickBeard is running.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.ping
   */
  SickbeardSB.prototype.ping = function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.ping').then(function(response){
      return response;
    });
  };

  /**
   * Restart SickBeard.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.restart
   */
  SickbeardSB.prototype.restart = function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.restart').then(function(response){
      return response;
    });
  };

  /**
   *	Search TVDB for a show with a given string or tvdbid.
   *
   *   @param object args
   *   Arguments to be passed with the call:
   *     name	show name
   *     tvdbid tvdbid unique show id
   *     lang two letter tvdb language, en = english
   *     		[en], zh, hr, cs, da, nl, fi, fr, de, el, he, hu, it, ja, ko, no, pl, pt, ru, sl, es, sv, tr
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.searchtvdb
   */
  SickbeardSB.prototype.searchTVDB = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('sb.searchtvdb', args).then(function(response){
      return response;
    });
  };

  /**
   *	Set default settings for SickBeard.
   *
   *  @param object args
   *  Arguments to be passed with the call:
   *    future_show_paused		0 - exclude paused shows on coming ep
	 *													1 - include paused shows on coming ep
	 *
	 *	  status									wanted, skipped, archived, ignored
	 *
	 *		flatten_folders				0 - use season folders if part of rename string
	 *		 											1 - do not use season folders
	 *
	 *		initial								multiple types can be passed when delimited by |
	 *		 											sdtv, sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl,
	 *		 											fullhdwebdl, hdbluray, fullhdbluray, unknown
	 *
	 *		archived							multiple types can be passed when delimited by |
	 *		 											sddvd, hdtv, rawhdtv, fullhdtv, hdwebdl,
	 *		 											fullhdwebdl, hdbluray, fullhdbluray
   *
   *	@return object
   *
   * 	@see http://sickbeard.com/api/#sb.setdefaults
   */
  SickbeardSB.prototype.setDefaults = function(args) {
    var delegate  = this.delegate;

    return delegate.cmd('sb.setdefaults', args).then(function(response){
      return response;
    });
  };

  /**
   * Shutdown SickBeard.
   *
   * @return object
   *
   * @see http://sickbeard.com/api/#sb.shutdown
   */
  SickbeardSB.prototype.shutDown = function() {
    var delegate  = this.delegate;

    return delegate.cmd('sb.shutdown').then(function(response){
      return response;
    });
  };

})();
