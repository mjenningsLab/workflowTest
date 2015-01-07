/*
This file demonstrates how to capture session values for a Splunk integration.
*/

/*
To stage the Alert integration, one needs to capture the Splunk
session values in legacy variable position 1.

These session values are time and cookie_id. The latter could
contain multiple cookie names and values.

Splunk provided us a custom function to call specifically for scraping
these values. This function accepts a single cookie name as a string
or an array of cookie names.
*/

(function (w, o) {
    'use strict';

    var splunk_replay_params = function (cookie_names) {
        var cookie_ids = '',
            cookie_map = {},
            cookies = document.cookie.split(';');

        if (!cookie_names) {
            console.log('OpinionLab message: you must pass one or more cookie names to splunk_replay_params()');
        } else if (typeof cookie_names == "string") {
            cookie_map[cookie_names.toLowerCase()] = 1;
        } else if (cookie_names instanceof Array) {
            for (var i = 0; i < cookie_names.length; ++i) {
                cookie_map[cookie_names[i].toLowerCase()] = 1;
            }
        } else {
            console.log('OpinionLab message: you must pass either a string or Array[string] to splunk_replay_params()');
        }

        for (var i = 0; i < cookies.length; ++i) {
            var x = cookies[i].substr(0,cookies[i].indexOf("="));
            x = x.replace(/^\s+|\s+$/g,"");
            x = x.toLowerCase();
            if (cookie_map[x]) {
                cookie_ids += ( '%26cookie_id%3d' + x + '%3d' + cookies[i].substr(cookies[i].indexOf("=")+1) );
            }
        }

        return 'time%3d' + Math.floor(new Date().getTime() / 1000) + cookie_ids;
    };

    w.oo_feedback = new o.Ocode({
        legacyVariables: {
            vars: splunk_replay_params(['FAP_JSESSIONID','MEM_JSESSIONID','PRV_JSESSIONID','ESS_JSESSIONID','ADM_JSESSIONID','PRD_JSESSIONID']),
            override: true
        }
    });

})(window, OOo);