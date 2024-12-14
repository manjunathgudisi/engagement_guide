sap.ui.define([
	'sap/ui/core/mvc/ControllerExtension'
], function (ControllerExtension, utilities) {
	'use strict';

	return ControllerExtension.extend('engagementguide.ext.controller.CustomerEngagementsList', {

		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf engagementguide.ext.controller.CustomerEngagementsList
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},

			onBeforeRendering: function () {
				var oModel = this.base.getExtensionAPI().getModel();
			},
			
			onAfterRendering: function () {
				var oModel = this.base.getExtensionAPI().getModel();
				
				// var oTable = this.getView().byId("engagementguide::CustomerEngagementsList--fe::table::CustomerEngagements::LineItem-innerTable-listUl");
    			// oTable.getRows().forEach(row => {
        		// 	// Example: Highlight rows based on a condition
        		// 	if (row.getCells()[0].getText() === "Critical") {
            	// 		row.addStyleClass("highlightRow");
        		// 	}
    			// });
			},

			onPageReady: function (oEvent) {
				var oModel = this.base.getExtensionAPI().getModel();
			},

			onBeforeRebindTable: function(oEvent) {
				var oBindingParams = oEvent.getParameter("bindingParams");
				// Example: Add custom filters
				var oCustomFilter = new sap.ui.model.Filter("Status", "EQ", "Active");
				oBindingParams.filters.push(oCustomFilter);
				
				// Example: Modify sorters
				oBindingParams.sorter = new sap.ui.model.Sorter("CreationDate", false);
			}
		}
	});
});
