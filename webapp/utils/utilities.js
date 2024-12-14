sap.ui.define([], function () {
	"use strict";
	return {
		// put your data functions here
        getIcon :  function (sentiment) {
            if (sentiment === "Red") {
                return "sap-icon://accept"; // use your png image here 
            } else if (sentiment === "Yellow") {
                return "sap-icon://decline";
            } else if (sentiment === "Green") {
                return "sap-icon://add";
            }
        }
	};
});