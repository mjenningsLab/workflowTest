var OnlineOpinion = (function () {
    'use strict';

    var cc = document.getElementById('CommentCard');
    var _vars = [];
    _vars.ccid = cc.elements["ccid"].value;
    _vars.referrerUrl = cc.elements["referer"].value;
    _vars.actualUrl = cc.elements["currentURL"].value;
    _vars.customVariables = cc.elements["customVars"].value;
    _vars.legacyVariables = cc.elements["custom_var"].value;

    return {
        Contains: function (sVarName) {
            return (_vars[sVarName] !== undefined);
        },
        Get: function (sVarName) {
            var returnValue = '';
            if (OnlineOpinion.Contains(sVarName)) {
                returnValue = _vars[sVarName];
            }
            return returnValue;
        }
    };
}());