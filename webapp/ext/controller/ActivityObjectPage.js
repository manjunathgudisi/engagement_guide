sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/Label",
    "sap/m/ColumnListItem",
    "sap/m/Input",
    "sap/ui/core/Fragment",
    "sap/m/ComboBox",
], function(MessageToast, Dialog, Button, Text, Table, Column, Label, ColumnListItem, Input, Fragment, ComboBox) {
    'use strict';

    return {
        onPressChageActivityStatus: function(oEvent) {
            MessageToast.show("onPressChageActivityStatus Custom handler invoked.");

            var text = new Text({
                text: "Change the actitivty status:"
            });

            var statusListJson = {statusList : [{ Name : "Not Started"}, {Name : "Planned"}, {Name : "In Progress"}, {Name : "Completed"}, {Name : "Not Planned"}]};
            var statusList = new sap.ui.model.json.JSONModel(statusListJson);
            var comboBox = new ComboBox({

            });
            var oItemTemplate = new sap.ui.core.Item({
                text : '{Name}' // here goes your binding for the property "Name" of your item
            });

            comboBox.setModel(statusList);
            comboBox.bindItems("/statusList", oItemTemplate);

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
                title: "Change the activity status",
                content: [text, comboBox],
                beginButton: new Button({
                    text: "OK",
                    press: function () {
                        oDialog.close();
                    }
                }),
                endButton: new Button({
                    text: "Cancel",
                    press: function () {
                        oDialog.close();
                    }
                })
            });

            // Open the dialog
            oDialog.open();
        },

        onPressUpdateStakeholderDetails: function() {
            MessageToast.show("Stakeholders details has been updated.");
        }
    };
});
