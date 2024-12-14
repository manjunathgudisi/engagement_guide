sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/Label",
    "sap/m/ColumnListItem",
    "sap/m/Input"
], function(MessageToast, Dialog, Button, Text, Table, Column, Label, ColumnListItem, Input) {
    'use strict';

    return {
        onPressChageActivityStatus: function(oEvent) {
            MessageToast.show("onPressChageActivityStatus Custom handler invoked.");

            // Create a table
            var oTable = new Table({
                inset: true,
                columns: [
                    new Column({
                        header: new Label({ text: "Column 1" })
                    }),
                    new Column({
                        header: new Label({ text: "Column 2" })
                    })
                ],
                items: {
                    path: this.getModel().sPath, // Adjust the binding path to your data model
                    template: new ColumnListItem({
                        cells: [
                            new Input({ value: "{name}" }),
                            new Input({ value: "{email}" })
                        ]
                    })
                }
            });

            var oDialog = new Dialog({
                title: "Custom Dialog",
                content: [oTable],
                beginButton: new Button({
                    text: "Close",
                    press: function () {
                        oDialog.close();
                    }
                })
            });

            // Open the dialog
            oDialog.open();
        },
        onPressUpdateStakeholderDetails: function() {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
