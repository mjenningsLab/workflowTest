/*
This file demonstrates some of the more complex scripts that may be used
in a ClickTale integration.

Specifically, how to setup message listeners and fire off custom ClickTale
events upon submission of a comment card.

ClickTale Wiki for more info - http://wiki.clicktale.com/Article/Events
*/

/*
To stage the Alert integration, one only needs to add the clickTalePID
parameter to the feedback object.

The PID is usually 1-5 digits and can be found in the ClickTale URL after
a client clicks a project from their account page.
*/

(function (w, o) {
    'use strict';

    w.oo_feedback = new o.Ocode({
        clickTalePID: 15
    });

})(window, OOo);

/*
In order to configure custom ClickTale events, one will need to add the
below message listener to a client's configuration file.

These VoC events can then be used to filter/segment ClickTale sessions,
heatmaps and other reports.
*/

(function (w, o) {
    'use strict';

    w.receiveMessage = function (e) {
        // Make sure message is received from OpinionLab Comment Card
        if (e.origin === 'https://secure.opinionlab.com') {
            // Check that ClickTale object exists and that data message is not blank
            if (typeof window.ClickTaleEvent === 'function' && e.data !== '') {
                var ctData = JSON.parse(e.data),
                    clickTaleEvent = window.ClickTaleEvent;
                // Loop through JSON data object and fire events for each key
                for (var key in ctData) {
                    clickTaleEvent(key + ':' + ctData[key]);
                }
            }
        }
    };

    o.addEventListener(w, 'message', receiveMessage, false);

})(window, OOo);

/*
In order to configure custom ClickTale events, one will need to fire the below
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