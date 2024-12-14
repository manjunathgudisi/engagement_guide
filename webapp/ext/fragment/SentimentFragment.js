sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },

        getIcon :  function (sentiment) {
            if (sentiment === "Red") {
                return "sap-icon://status-negative"; // use your png image here 
            } else if (sentiment === "Amber") {
                return "sap-icon://status-critical";
            } else if (sentiment === "Green") {
                return "sap-icon://status-positive";
            } else {
                return "sap-icon://question-mark";
            }
        }
    };
});
