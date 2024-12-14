sap.ui.define([
    'sap/m/library',
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function(mobileLibrary, MessageToast,MessageBox) {
    'use strict';

    var URLHelper = mobileLibrary.URLHelper;

    return {
        onPressBusinessStrategyRecommender: function(oEvent) {
            //MessageToast.show("Custom handler invoked.");

            var that = this;
            MessageBox.show(
                "This is helpful for searching various knowledge topics using Gen AI technology", {
                    icon: MessageBox.Icon.INFORMATION,
                    title: "Gen AI Knowledge Help",
                    actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                    onClose: function(oAction) {
                        if (oAction == MessageBox.Action.YES) {
                            //that.openURL();
                            mobileLibrary.URLHelper.redirect("https://emea-coinnovation-eu12-rx8l4ntm.launchpad.cfapps.eu12.hana.ondemand.com/site?siteId=6c29fe49-a18a-4556-9cf2-773d2a721fa6#edith-display?sap-ui-app-id-hint=saas_approuter_sap.pscc.edith", true);

                        } else {

                        }
                    }
                }
            );
        },
        onPressChangeStatus: function() {
            MessageToast.show("onPressChangeStatus Custom handler invoked.");
        }
    };
});
