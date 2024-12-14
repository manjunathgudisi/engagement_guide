sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'engagementguide/test/integration/FirstJourney',
		'engagementguide/test/integration/pages/CustomerEngagementsList',
		'engagementguide/test/integration/pages/CustomerEngagementsObjectPage',
		'engagementguide/test/integration/pages/ActivityObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerEngagementsList, CustomerEngagementsObjectPage, ActivityObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('engagementguide') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerEngagementsList: CustomerEngagementsList,
					onTheCustomerEngagementsObjectPage: CustomerEngagementsObjectPage,
					onTheActivityObjectPage: ActivityObjectPage
                }
            },
            opaJourney.run
        );
    }
);