/*
This file demonstrates some of the more complex scripts that may be used
in a UserReplay integration.

Specifically, how to setup message listeners and fire off custom UserReplay
variables upon submission of a comment card.
*/

/*
To stage the Alert integration, one needs to capture the UserReplay session
IDs in legacy variable position 1.

The Project ID and Session ID need to be captured and passed to the comment
card in the below format.

Once these values are properly passed with feedback, you will need to
configure the alert settings.

1. Enable Tealeaf Integration on alert
2. Add HOST field - userreplay.domain.com
3. Add WEBSERVICENAME field - voc_search.php
*/

(function (w, o) {
    'use strict';

    // may vary by domain for each customer
    var pid = '1',
        uid = o.readCookie('uid');

    w.oo_feedback = new o.Ocode({
        legacyVariables: {
            vars: 'pid%3D' + pid + '%26info%3D' + uid,
            override: true
        }
    });

})(window, OOo);

/*
In order to configure custom UserReplay events, one will need to add the
below message listener to a client's configuration file.

These VoC variables can then be used to filter/segment UserReplay sessions,
heatmaps and other reports.
*/

(function (w, o) {
    'use strict';

    w.receiveMessage = function (e) {
        // Make sure message is received from OpinionLab Comment Card
        if (e.origin === 'https://secure.opinionlab.com') {
            // Check that UserReplay object exists and that data message is not blank
            if (typeof window._mfq === 'object' && e.data !== '') {
                var mfData = JSON.parse(e.data);
                // Loop through JSON data object and fire variables for each key
                for (var key in mfData) {
                    window._mfq.push(["setVariable", key, mfData[key]]);
                }
            }
        }
    };

    o.addEventListener(w, 'message', receiveMessage, false);

})(window, OOo);

/*
In order to configure custom UserReplay events, one will need to fire the below
message from the OpinionLab comment card or thank you.

These messages pass a string JSON object with all the data elements a client
would want to pass.

data example - '{"olCommentCard":"Submission","olOverallRating":"1"}'
*/

(function (w) {
    'use strict';

    var opener = w.opener;
    if (!!opener) {
        opener.postMessage('{"olCommentCard":"Submission","olOverallRating":"1"}','*');
    }

})(window);