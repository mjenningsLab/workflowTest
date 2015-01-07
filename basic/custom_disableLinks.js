/*
This is an example of a custom script to target problem elements for exit events
and set the interruptShow flag.

This is only necessary when the disableLinks and disableFormElements parameters
don't work.
*/

/* For a single element. */
(function (w, d, o) {
    'use strict';

    var element = d.querySelector('#id');

    w.ooInterrupt = function (obj) {
        if (typeof obj !== 'undefined') {
            obj.interruptShow = true;
        }
    };

    o.addEventListener(element, 'mousedown', ooInterrupt(oo_exit), false);

})(window, document, OOo);

/* For multiple elements. */
(function (w, d, o) {
    'use strict';

    var elements = d.querySelectorAll('.class');

    w.ooInterrupt = function (obj) {
        if (typeof obj !== 'undefined') {
            obj.interruptShow = true;
        }
    };

    for (var i = 0; i < elements.length; i++) {
        o.addEventListener(elements[i], 'mousedown', ooInterrupt(oo_exit), false);
    }

})(window, document, OOo);