(function() {
  var request         = require('request');
  var URL             = require('url');
  var util            = require('util');
  var QS              = require('querystring');
  var Q               = require('q');

  // API method classes.
  var SickbeardEpisode = require('./sickbeard-episode');
  var SickbeardHistory = require('./sickbeard-history');
  var SickbeardSB = require('./sickbeard-sb');
  var SickbeardShow = require('./sickbeard-show');
  var SickbeardShows = require('./sickbeard-shows');

  /**
   * Main Sickbeard API class.
   *
   * @param string url
   *   URL of the sickbeard server, including port.
   * @param string apikey
   *   Sickbeard API key.
   * @param bool debug
   *   Debug mode - turn on extra logging.
   */
  var Sickbeard = function(url, apikey, debug){
    this.apikey = apikey;
    this.debug = debug === true;
    // API Version.
    this.version = 1;
    // Is this a invalid API url?
    this.invalid  = false;

    // instantiate API method classes
    this.episode = new SickbeardEpisode(this);
    this.history = new SickbeardHistory(this);
    this.sb = new SickbeardSB(this);
    this.show = new SickbeardShow(this);
    this.shows = new SickbeardShows(this);

    // Attach API endpoint to url
    if (url.indexOf('/api') == -1) {
      url = url.replace(/\/?$/, '/api');
    }
    this.url = url;

    var _this = this;

    // Check for valid API key && get API version.
    this.cmd('sb')
      .then(function(response) {
        if (response.result === 'denied') {
          util.log("Connection denied.");
          util.log(response.message);
          _this.invalid = true;
        }
        else {
          _this.version = response.data.api_version;
          if (_this.debug) {
            util.log('Sickbeard accepted supplied API key.');
            util.log('API version: ' + _this.version);
          }
        }
      })
      .catch(function(error) {
        util.log(error);
      });


  };

  /**
   * Get a list of the SickBeard API methods inplemented, along with the URL
   * to their description on sickbeard.com
   *
   * @return array
   *   Array of objects containing;
   *     method: the method name,
   *     apiMethod: It's SickBeard API equivalent
   *     url: URL to the sickebeard.com API doc for this method.
   */
  Sickbeard.prototype.implements = function() {
    var y = [];
    [
      {name: 'SickbeardEpisode', method: SickbeardEpisode},
      {name: 'SickbeardHistory', method: SickbeardHistory},
      {name: 'SickbeardSB', method: SickbeardSB},
      {name: 'SickbeardShow', method: SickbeardShow},
      {name: 'SickbeardShow', method: SickbeardShows}
    ].map(function(obj){
      var x = obj.method.prototype;

      for (i in x) {
        api = obj.name.replace('Sickbeard', '').toLowerCase() + (i == 'self' ? '' : "." + i);
        url ='http://sickbeard.com/api/#' + api.replace('.','');
        y.push({
          method: obj.name + '.' + i,
          apiMethod: api,
          url: url
        });
      }

    });
    return y;
  };

  /**
   * Call the 'future' method of the API, and return the data
   * from the call.
   *
   * @param object args
   *   Optional arguments to be passed with the call.
   *
   * @return object
   *   JSON object describing the shows in the Sickbeard list.
   *
   * @see http://sickbeard.com/api/#future
   */
  Sickbeard.prototype.future = function(args) {
    return this.cmd('future', args).then(function(response){
      return response;
    });
  };

  /**
   * Perform a command request against the API.
   *
   * @param  string command
   *   The command to call.
   * @param  string || array args
   *   Any arguments to pass with command.
   *
   * @return object
   *   deferred promise.
   */
  Sickbeard.prototype.cmd = function(command, args) {
    if (this.invalid) {
      util.log('SABnzbd API invalid because of connection/API key issues');
      return false;
    }

    // Build url for request.
    var url = this.url + '/' + this.apikey + '/?' + QS.stringify({
      cmd: command
    });

    // tack on any passed arguments
    if (args) {
      url += '&' + QS.stringify(args);
    }

    if (this.debug) {
      util.log("Retrieving url '" + url + "'");
    }

    // perform request
    var defer = Q.defer();
    request.get(url, function(error, response, body) {
      if (error) {
        defer.reject(error);
      }
      else {
        if (response.headers['content-type'].indexOf('application/json') != -1) {
          body = JSON.parse(body);
        }
        defer.resolve(body);
      }
    });

    // return deferred object
    return defer.promise;
  };

  module.exports = Sickbeard;

})();
