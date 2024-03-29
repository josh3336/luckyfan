var http = require("http");
var https = require("https");
var rest = require("rest");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};


//information for sportsdatallc:
//api.sportsdatallc.org/mlb-t3/schedule/2013.xml?api_key=3ad9uep6u6vhhjmwsukekyzd&header=Access-Control-Allow-Origin%3A+*&dataType=jsonp

var options = {
    host: 'pi.sportsdatallc.org/mlb-t3/schedule/2013.xml?api_key=3ad9uep6u6vhhjmwsukekyzd',
    port: 443,
    path: '/some/path',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

rest.getJSON(options,
    function(statusCode, result)
    {
        // I could work with the result html/json here.  I could also just return it
        console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        res.statusCode = statusCode;
        res.send(result);
    });