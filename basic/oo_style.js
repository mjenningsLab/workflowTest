/*
OnlineOpinion v5.9.0
Released: 11/17/2014. Compiled 11/17/2014 01:01:01 PM -0600
Branch: master 7cffc7b9a0b11594d56b71ca0cb042d9b0fc24f5
Components: Full
UMD: disabled
The following code is Copyright 1998-2014 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/

/* Define Paths to Image Assets */

var
  pathToAssets = '/onlineopinionv5/',
  bar_gif = pathToAssets + 'oo_bar_icon.gif',
  float_gif = pathToAssets + 'oo_float_icon.gif',
  loading_gif = pathToAssets + 'oo_loading.gif',
  tab_1_gif = pathToAssets + 'oo_tab_icon_1.gif',
  tab_gif = pathToAssets + 'oo_tab_icon.gif',
  tab_png = pathToAssets + 'oo_tab.png';

/* If using dynamic translations, uncomment and modify the code below. */
/*
// grab the language type from a cookie or JavaScript variable
var lang = OOo.readCookie('');

switch (lang) {
    case 'German':
        tab_png = pathToAssets + 'oo_tab_german.png';
        tabPaddingTop = '95px';
        tabPaddingBottom = '95px';
        tabTop = '12px';
        iconBottom = '15px';
        break;
    case 'Japanese':
        tab_png = pathToAssets + 'oo_tab_japanese.png';
        tabPaddingTop = '65px';
        tabPaddingBottom = '65px';
        tabTop = '10px';
        iconBottom = '15px';
        break;
    case 'Chinese':
        tab_png = pathToAssets + 'oo_tab_chinese.png';
        tabPaddingTop = '60px';
        tabPaddingBottom = '60px';
        tabTop = '10px';
        iconBottom = '15px';
        break;
    default: //English
        tabPaddingTop = '80px';
        tabPaddingBottom = '80px';
        tabTop = '10px';
        iconBottom = '15px';
        break;
}
*/

/* Create and Append Style Element */
var css = document.createElement("style");
css.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(css);


cssText = "#oo_company_logo img { max-height: 100%; max-width: 100%; height: auto; width: auto\9; /* ie8 */ }";

cssText += "\n#oo_feedback_fl_spacer { display: block; height: 1px; position: absolute; top: 0; width: 100px; }";

cssText += "\n.oo_feedback_float { width: 100px; height: 50px; overflow: hidden; font: 12px Tahoma, Arial, Helvetica, sans-serif; text-align: center; color: #252525; cursor: pointer; z-index: 999997; position: fixed; bottom: 5px; border: 1px solid #cccccc; border-radius: 9px; -moz-border-radius: 9px; -webkit-border-radius: 9px; right: 10px; -webkit-transition: -webkit-transform 0.3s ease; }";
cssText += "\n.oo_feedback_float .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n.oo_feedback_float .olUp { width: 100%; height: 100%; background: url(" + float_gif + ") center 10px no-repeat; text-align: center; padding: 31px 0 5px 0; position: relative; z-index: 2; filter: alpha(opacity=100); opacity: 1; transition: opacity .5s; -moz-transition: opacity .5s; -webkit-transition: opacity .5s; -o-transition: opacity .5s; }";
cssText += "\n.oo_feedback_float .olUp img { margin-bottom: 5px; }";
cssText += "\n.oo_feedback_float .oo_transparent { display: block; background: white; position: absolute; top: 0; left: 0; height: 100%; width: 100%; z-index: 1; opacity: 0.8; filter: alpha(opacity=80); border-radius: 8px; -moz-border-radius: 8px; -webkit-border-radius: 8px; }";
cssText += "\n.oo_feedback_float:hover .oo_transparent { opacity: 1.0; filter: alpha(opacity=100); }";
cssText += "\n.oo_feedback_float:hover .olUp { display: block; opacity: 0; filter: alpha(opacity=0); }";
cssText += "\n.oo_feedback_float .fbText { display: block; }";
cssText += "\n.oo_feedback_float .olOver { display: block; height: 100%; width: 100%; position: absolute; top: 0; left: 0; min-height: 50px; z-index: 2; opacity: 0; filter: alpha(opacity=0); transition: opacity .5s; -moz-transition: opacity .5s; -webkit-transition: opacity .5s; -o-transition: opacity .5s; }";
cssText += "\n.oo_feedback_float .olOver span { display: block; padding: 10px 5px; }";
cssText += "\n.oo_feedback_float:hover .olOver { opacity: 1.0; filter: alpha(opacity=100); top: 0; }";

cssText += "\n.oo_cc_wrapper { left: 0; padding: 0; position: fixed; text-align: center; top: 25px; width: 100%; z-index: 999999; }";
cssText += "\n.oo_cc_wrapper .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n.oo_cc_wrapper span { width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 1; }";
cssText += "\n.oo_cc_wrapper .iwrapper { background-color: white; margin: 0 auto; position: relative; width: 535px; z-index: 2; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); }";
cssText += "\n.oo_cc_wrapper iframe { position: relative; border: none; width: 100%; z-index: 4; }";
cssText += "\n.oo_cc_wrapper .oo_cc_close { position: absolute; display: block; right: 20px; top: 5px; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; text-align: center; z-index: 5; color: black; text-decoration: none; cursor: pointer; }";

cssText += "\n#oo_bar { padding: 10px 35px; cursor: pointer; color: white; border-top: 1px solid white; background-color: black; bottom: 0; display: block; font: 16px 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; left: 0; text-decoration: none; line-height: 16px; position: fixed; text-align: left; width: 100%; z-index: 999997; box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 2px; }";
cssText += "\n#oo_bar span.icon { background-image: url(" + bar_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_bar .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_bar:focus { outline: 3px solid #51ace9; }";

cssText += "\n.oo_bar { padding-bottom: 37px; }";

cssText += "\n#oo_tab { background-color: #ffffff; border: 1px solid #cccccc; display: block; position: fixed; top: 40%; padding: 55px 0px 55px 0px; width: 35px; z-index: 999995; cursor: pointer; }";
cssText += "\n#oo_tab span { bottom: 15px; display: block; background: url(" + tab_gif + ") no-repeat; height: 9px; position: absolute; width: 9px; }";
cssText += "\n#oo_tab div { background-image: url(" + tab_png + "); background-repeat: no-repeat; position: absolute; display: block; height: 100%; left: 0; top: 0; width: 100%; }";
cssText += "\n#oo_tab.wcag a { background: url(" + tab_gif + ") no-repeat; background-repeat: no-repeat; background-position: center bottom; border: none; outline: none; position: absolute; display: block; bottom: 14px; left: -6px; top: 0; width: 100%; }";
cssText += "\n#oo_tab.wcag img { border: none; outline: none; display: block; position: absolute; left: -6px; top: -10px; }";
cssText += "\n#oo_tab .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

cssText += "\n.oo_tab_left { left: -13px; border-radius: 0px 9px 9px 0px; -moz-border-radius: 0px 9px 9px 0px; -webkit-border-radius: 0px 9px 9px 0px; transition: left .5s; -moz-transition: left .5s; -webkit-transition: left .5s; -o-transition: left .5s; background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, from(#eeeeee), to(#ffffff)); background-image: -webkit-linear-gradient(left, #eeeeee, #ffffff); background-image: -moz-linear-gradient(left, #eeeeee, #ffffff); background-image: -ms-linear-gradient(left, #eeeeee, #ffffff); background-image: -o-linear-gradient(left, #eeeeee, #ffffff); background-image: linear-gradient(left, #eeeeee, #ffffff); }";
cssText += "\n.oo_tab_left span { right: 6px; }";
cssText += "\n.oo_tab_left div { background-position: 6px -10px; }";
cssText += "\n.oo_tab_left:hover { left: -5px; }";

cssText += "\n.oo_tab_right { right: -13px; border-radius: 9px 0px 0px 9px; -moz-border-radius: 9px 0px 0px 9px; -webkit-border-radius: 9px 0px 0px 9px; transition: right .5s; -moz-transition: right .5s; -webkit-transition: right .5s; -o-transition: right .5s; background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, from(#ffffff), to(#eeeeee)); background-image: -webkit-linear-gradient(left, #ffffff, #eeeeee); background-image: -moz-linear-gradient(left, #ffffff, #eeeeee); background-image: -ms-linear-gradient(left, #ffffff, #eeeeee); background-image: -o-linear-gradient(left, #ffffff, #eeeeee); background-image: linear-gradient(left, #ffffff, #eeeeee); }";
cssText += "\n.oo_tab_right span { left: 7px; }";
cssText += "\n.oo_tab_right div { background-position: -6px -10px; }";
cssText += "\n.oo_tab_right:hover { right: -5px; }";

cssText += "\n#oo_tab_1 { background-color: black; border: 1px solid #ffffff; display: block; position: fixed; top: 40%; padding: 10px 0px 10px 0px; width: 124px; z-index: 999995; cursor: pointer; text-decoration: none; text-align: left; font-family: 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; line-height: 16px; font-size: 16px; color: #fff; }";
cssText += "\n#oo_tab_1:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_tab_1 span.screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";
cssText += "\n#oo_tab_1.oo_tab_right_1 { right: -9px; transition: right 1.5s; -moz-transition: right 1.5s; -webkit-transition: right 1.5s; padding: 10px 0px 10px 35px; box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px; width: 89px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1 span.icon { background-image: url(" + tab_1_gif + "); background-repeat: no-repeat; position: absolute; left: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1.small { right: -90px; }";
cssText += "\n#oo_tab_1.oo_tab_right_1.small:hover { right: -9px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1 { left: -9px; transition: left 1.5s; -moz-transition: left 1.5s; -webkit-transition: left 1.5s; padding: 10px 0px 10px 15px; box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; -moz-box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.5) -1px 1px 2px; width: 109px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1 span.icon { background-image: url(" + tab_1_gif + "); background-repeat: no-repeat; position: absolute; right: 8px; top: 9px; width: 19px; height: 17px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1.small { left: -90px; }";
cssText += "\n#oo_tab_1.oo_tab_left_1.small:hover { left: -9px; }";

cssText += "\n#oo_container { position: fixed; height: 100%; width: 100%; top: 0; left: 0; z-index: 999999; }";

cssText += "\n#oo_invitation_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_invitation_prompt #oo_company_logo { width: 100%; height: 120px; background: black; }";
cssText += "\n#oo_invitation_prompt #oo_company_logo img { height: 100%; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content { width: 80%; padding: 40px 10% 20px 10%; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content p { color: black; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content p.prompt_button a { text-align: center; color: white; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a { cursor: pointer; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a#oo_launch_prompt { background: #cb352d; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content a#oo_no_thanks { background: #707070; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_brand_logo { text-align: center; border-top: 1px solid #ccc; line-height: 1.5em; margin: 20px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_invitation_prompt #oo_invite_content #ol_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt { position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt:focus { outline: none; }";
cssText += "\n#oo_invitation_prompt #oo_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_invitation_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_invitation_prompt { width: 90%; } #oo_invitation_prompt #oo_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; } #oo_invitation_prompt #oo_company_logo { height: 80px; } #oo_invitation_prompt #oo_invite_content { padding: 20px 10% 20px 10%; } #oo_invitation_prompt #oo_invite_content #ol_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_invitation_prompt #oo_close_prompt { right: -70px; } }";


cssText += "\n#oo_waypoint_container { position: fixed; height: 100%; width: 100%; top: 0; left: 0; z-index: 999999; }";

cssText += "\n#oo_waypoint_prompt { background: #fff; box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -moz-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); -webkit-box-shadow: 0px 1px 3px 0px rgba(102, 102, 102, 0.3); margin: 5% auto; text-align: left; position: relative; width: 500px; z-index: 999999; }";
cssText += "\n#oo_waypoint_prompt #oo_company_logo { width: 100%; height: 120px; background: black; }";
cssText += "\n#oo_waypoint_prompt #oo_company_logo img { height: 100%; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content { width: 80%; padding: 30px 10% 20px 10%; box-shadow: inset 0px 0px 0px 1px #ccc; -webkit-box-shadow: inset 0px 0px 0px 1px #ccc; -moz-box-shadow: inset 0px 0px 0px 1px #ccc; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a { cursor: pointer; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a:focus { outline: 3px solid #51ace9; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content p { color: black; font: 1em/1.5em 'HelveticaNeue-Medium', Helvetica, Arial, sans-serif; margin: 0; padding: 0 0 20px 0; text-align: center; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content p#oo_waypoint_message { font-size: 1.2em; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon { cursor: pointer; text-decoration: none; font-size: 1.5em; line-height: 1.2em; padding: 12px 0 13px 0; display: block; height: 25px; color: white; margin-bottom: 20px; background-color: #cb352d; text-align: center; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content a.waypoint_icon.last { margin-bottom: 0; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo { border-top: 1px solid #ccc; line-height: 1.5em; margin: 10px 0 0 0; padding: 20px 0 0 0; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo img { height: 25px; width: 146px; border: 0px; }";
cssText += "\n#oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo a { display: block; height: 25px; }";
cssText += "\n#oo_waypoint_prompt #oo_close_prompt { position: absolute; display: block; right: 13px; top: 13px; line-height: 1em; font-size: 1em; color: white; text-decoration: none; }";
cssText += "\n#oo_waypoint_prompt #oo_close_prompt:focus { outline: none; }";
cssText += "\n#oo_waypoint_prompt #oo_close_prompt:focus span { outline: 3px solid #51ace9; }";
cssText += "\n#oo_waypoint_prompt .screen_reader { position: absolute; clip: rect(1px 1px 1px 1px); /* for Internet Explorer */ clip: rect(1px, 1px, 1px, 1px); padding: 0; border: 0; height: 1px; width: 1px; overflow: hidden; }";

/* Android, iPhone 6 ----------- */
cssText += "\n@media only screen and (max-device-width: 480px), screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) { #oo_waypoint_prompt { width: 90%; } #oo_waypoint_prompt #oo_company_logo { height: 80px; } }";
/* iPhone 5, 4 ----------- */
cssText += "\n@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2), screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_waypoint_prompt { width: 90%; height: 90%; overflow-y: scroll; overflow-x: hidden; } #oo_waypoint_prompt #oo_company_logo { height: 80px; } #oo_waypoint_prompt #oo_waypoint_content { padding: 20px 10% 20px 10%; } #oo_waypoint_prompt #oo_waypoint_content #ol_brand_logo { margin: 0 0 0 0; } }";
/* iPhone 4 only ----------- */
cssText += "\n@media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2) { #oo_waypoint_prompt #oo_close_prompt { right: -70px; } }";
cssText += "\n#oo_overlay, #oo_invitation_overlay, #oo_waypoint_overlay { background: white url(" + loading_gif +") 50% 80px no-repeat; display: block; height: 1000%; left: 0; position: fixed; top: 0; width: 100%; z-index: 999998; opacity: 0.5; filter: alpha(opacity=50); }";
cssText += "\n#oo_overlay.no_loading, #oo_invitation_overlay.no_loading, #oo_waypoint_overlay.no_loading { background: white; opacity: 0.5; filter: alpha(opacity=50); }";

cssText += "\n@media print { #oo_bar, .oo_feedback_float, #oo_tab { display: none; } }";
