/*
This file demonstrates some of the more complex scripts that may be used
in a TeaLeaf integration.

Specifically, how to POST OpinionLab metrics to the TeaLeaf API. This
allows a client to filter and segment TeaLeaf sessions and data by
OpinionLab VoC metrics.

For more info, see the TeaLeaf user manual in Box - VOCAdminManual_API_Integration.pdf
*/

/*
To stage the Alert integration, one only needs to add the tealeafCookieName
parameter to the feedback object.

The Tealeaf cookie name is typically TLTSID but the client may have chosen
to use a different session value.
*/

(function (w, o) {
    'use strict';

    w.oo_feedback = new o.Ocode({
        tealeafCookieName: 'TLTSID'
    });

})(window, OOo);

/*
In order to POST to TeaLeaf's NVP API, one will need to load the
below scripts on the thank you window(s).

******
The form action must be modified to reference the client's TeaLeaf
Target page.
******

These VoC metrics can then be used to filter/segment TeaLeaf sessions,
heatmaps and other reports.
*/

(function (d) {
    'use strict';

    // Create hidden iframe for form POST
    var iframe = d.createElement('iframe'),
        iframeName = 'OO_TEALEAF_INTEGRATION';

    iframe.style.display = 'none';
    iframe.contentWindow.name = iframeName;

    d.body.appendChild(iframe);

    // Create hidden form to POST to hidden iframe
    var form = d.createElement('form');
        form.target = iframeName;
        form.action = '/TealeafTarget.jsp';
        form.method = 'POST';
        form.style.display = 'none';

    // Function to append hidden form inputs
    var createInput = function (n, v) {
        var input = d.createElement('input');
        input.type = 'hidden';
        input.name = n;
        input.value = v;
        return input;
    };

    // Append hidden inputs for each metric
    form.appendChild(createInput('VOCName','OpinionLab'));
    form.appendChild(createInput('OverallRating','3'));
    form.appendChild(createInput('ContentRating','2'));
    form.appendChild(createInput('DesignRating','1'));
    form.appendChild(createInput('UsabilityRating','4'));
    form.appendChild(createInput('Comment','test+comment'));
    form.appendChild(createInput('CommentReason','Technical+Issue'));
    form.appendChild(createInput('Page','http%3A%2F%2Fwww.domain.com'));
    form.appendChild(createInput('ContactEmail','testing@opinionlab.com'));
    form.appendChild(createInput('SiteVisitReason','Research+Products'));
    form.appendChild(createInput('CSatRating','6'));

    d.body.appendChild(form);
    form.submit();

})(document);