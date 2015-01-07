/*
OnlineOpinion v5.9.0
Released: 11/17/2014. Compiled 11/17/2014 01:01:01 PM -0600
Branch: master 7cffc7b9a0b11594d56b71ca0cb042d9b0fc24f5
Components: Full
UMD: disabled
The following code is Copyright 1998-2014 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/

/* global window, OOo */

/*
Waypoint configuration
************************
May pass up to 4 categories.
Passing a link instead of an object will setup a normal link
*/
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_waypoint = new o.Waypoint({
        /* REQUIRED - Asset identification */
            pathToAssets: '/onlineopinionV5/',
            companySlogan: 'Give us feedback',
            companyLogo: 'waypoint_logo.png',
        /* OPTIONAL - Configuration */
            categories: {
                website: {
                    oCode: {
                        tealeafCookieName: 'TLTSID',
                        clickTalePID: 12345,
                        customVariables: {
                            name1: 'value1',
                            name2: 'value2'
                        }
                    },
                    icon: 'icon_web.png'
                },
                store: {
                    oCode: {
                        referrerRewrite: {
                            searchPattern: /:\/\//,
                            replacePattern: '://store.'
                        },
                        tealeafCookieName: 'TLTSID',
                        clickTalePID: 12345,
                        customVariables: {
                            name1: 'value1',
                            name2: 'value2'
                        }
                    },
                    icon: 'icon_store.png'
                },
                product: {
                    oCode: {
                        referrerRewrite: {
                            searchPattern: /:\/\//,
                            replacePattern: '://product.'
                        },
                        tealeafCookieName: 'TLTSID',
                        clickTalePID: 12345,
                        customVariables: {
                            name1: 'value1',
                            name2: 'value2'
                        }
                    },
                    icon: 'icon_product.png'
                },
                support: {
                    oCode: 'http://www.opinionlab.com',
                    icon: 'icon_other.png'
                }
            },
            disableMobile: false,
            disableNoniOS: false
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/* Invitation configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_invite = new o.Invitation({
        /* REQUIRED - Asset identification */
            pathToAssets: '/onlineopinionV5/',
            companyLogo: '/onlineopinionV5/logo.gif',
            companySlogan: 'We value your opinion!',
        /* OPTIONAL - Configuration */
            responseRate: 100,
            repromptTime: 2592000,
            promptTrigger: /CheckoutSignIn/i,
            pagesHit: 0,
            promptDelay: 3,
            asm: 1,
            newWindowSize: [400, 400],
            popupType: 'popunder',
            neverShowAgainButton: false,
            truncatePrevCurrentMetrics: false,
            disablePrevCurrentMetrics: false,
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            chromeSurveyPrompt: 'Please fill out the end of visit comment card.',
            friendlyDomains: ['www.domain1.com','www.domain2.com'],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            },
        /* OPTIONAL - Cookie names */
            repromptCookie: 'oo_inv_reprompt',
            percentageCookie: 'oo_inv_percent',
            tunnelCookie: 'oo_inv_tunnel',
            callBacks: {
                prompt: function () {
                    console.log('prompt displayed');
                },
                yesClick: function () {
                   console.log('yes click');
                },
                noClick: function () {
                    console.log('no click');
                },
                closeClick: function () {
                    console.log('close click');
                }
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/*
Inline configuration
*********************
Object is now being instantiated against the OOo object (1 global class)
To call this object, place the below in the click event
OOo.oo_feedback.show(event)
*/
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_feedback = new o.Ocode({
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            onPageCard: {
                closeWithOverlay: true
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/* [+] Floating configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_floating = new o.Ocode({
            floating: {
                id: 'oo_float',
                position: 'fixedPreserveContent',
                contentId: 'testId',
                caption: 'Feedback',
                hoverCaption: 'Click here to<br />rate this page'
            },
            disableMobile: true,
            cookie: {
                name: 'oo_r',
                type: 'page',
                expiration: 3600
            },
            disappearOnClick: true,
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            onPageCard: {
                closeWithOverlay: true
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/* [+] Tab configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_tab = new o.Ocode({
            tab: {
                position: 'right',
                title: 'Feedback',
                tabType: 1,
                verbiage: 'feedback'
            },
            disableMobile: true,
            cookie: {
                name: 'oo_r',
                type: 'page',
                expiration: 3600
            },
            disappearOnClick: true,
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            onPageCard: {
                closeWithOverlay: true
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/* [+] Bar configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_bar = new o.Ocode({
            bar: {
                caption: 'Share website feedback'
            },
            disableMobile: true,
            cookie: {
                name: 'oo_r',
                type: 'page',
                expiration: 3600
            },
            disappearOnClick: true,
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            onPageCard: {
                closeWithOverlay: true
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/* Exit Event configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_exit = new o.Ocode({
            events: {
                onExit: 100,
                disableLinks: /^(http:\/\/www\.opinionlab\.com|http:\/\/salesdemo\.opinionlab\.com|http:\/\/www\.dialogcentral\.com)/i,
                disableFormElements: true
            },
            cookie: {
                name: 'oo_exit',
                type: 'domain',
                expiration: 2592000
            },
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            abandonment: {
                startPage: 'one.html',
                middle: 'two.html',
                endPage: 'three.html'
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/* Entry Event configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_entry = new o.Ocode({
            events: {
                onEntry: 100,
                delayEntry: 3,
                prompt: true // or string value of path
            },
            cookie: {
                name: 'oo_entry',
                type: 'domain',
                expiration: 2592000
            },
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            onPageCard: {
                closeWithOverlay: true
            },
            tunnel: {
                path: ['/test/1.html', '/test/2.html', '/test/3.html'],
                cookieName: 'oo_tunnel'
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);

/*
Click Event configuration
**************************
Object is now being instantiated against the OOo object (1 global class)
To call this object, place the below in the click event
OOo.oo_click.show(event)
*/
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_click = new o.Ocode({
            events: {
                onSingleClick: 100
            },
            cookie: {
                name: 'oo_click',
                type: 'domain',
                expiration: 2592000
            },
            referrerRewrite: {
                searchPattern: /:\/\/[^\/]*/,
                replacePattern: '://newdomain.com'
            },
            onPageCard: {
                closeWithOverlay: true
            },
            tealeafCookieName: 'TLTSID',
            clickTalePID: 12345,
            newWindowSize: [400, 400],
            customVariables: {
                name1: 'value1',
                name2: 'value2'
            }
        });

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);
