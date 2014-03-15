(function() {
  var request         = require('request');
  var URL             = require('url');
  var util            = require('util');
  var QS              = require('querystring');
  var Q               = require('q');

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
        body = JSON.parse(body);
        defer.resolve(body);
      }
    });

    // return deferred object
    return defer.promise;
  };

  module.exports = Sickbeard;

})();