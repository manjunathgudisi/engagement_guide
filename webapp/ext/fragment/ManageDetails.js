sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPressManageDetails: function(oEvent) {
            MessageToast.show("onPressManageDetails Custom handler invoked.");
        }
    };
});
