/*
This file demonstrates some of the more complex scripts that may be used
in a Mouseflow integration.

Specifically, how to setup message listeners and fire off custom Mouseflow
variables upon submission of a comment card.

Mouseflow Support Center for more info - https://mouseflow.zendesk.com/home
*/

/*
To stage the Alert integration, one needs to capture the Mouseflow session
IDs in legacy variable position 1.

The Server ID and Session ID need to be captured and passed to the comment
card in the below format.
*/

(function (w, o) {
    'use strict';

    var mfServerId = (typeof mouseflow === 'object') ? mouseflow.baseUrl.charAt(2) : '',
        mfSessionId = (typeof mouseflow === 'object') ? mouseflow.getSessionId() : '';

    w.oo_feedback = new o.Ocode({
        legacyVariables: {
            vars: 'mfServerId%3D' + mfServerId + '%26mfSessionId%3D' + mfSessionId,
            override: true
        }
    });

})(window, OOo);

/*
In order to configure custom Mouseflow variables, one will need to add the
below message listener to a client's configuration file.

These VoC variables can then be used to filter/segment Mouseflow sessions,
heatmaps and other reports.
*/

(function (w, o) {
    'use strict';

    w.receiveMessage = function (e) {
        // Make sure message is received from OpinionLab Comment Card
        if (e.origin === 'https://secure.opinionlab.com') {
            // Check that MouseFlow object exists and that data message is not blank
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
In order to configure custom Mouseflow variables, one will need to fire the below
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