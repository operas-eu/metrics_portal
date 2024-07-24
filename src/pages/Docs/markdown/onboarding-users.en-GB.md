# Onboarding users documentation
Follow the steps in this section to onboard your metrics to the OPERAS metrics system.


## Key terms used in this documentation:
- User: Customer of the OPERAS Metrics service.
- Provider: Organisation hosting and maintaining the OPERAS Metrics service.
- Drivers: [List of drivers][7].
- Identifiers: [Identifier Translation Service][1].
- Measures: [Different types of measures] [2].
- Simulation Test: First run of the OPERAS Metrics to verify it works.

Technical and personnel/skill requirements for becoming a full user of OPERAS Metrics:

- Basic bash knowledge.
- Postgres installation and creation of user and database.
- Basic data structures knowledge.


## Steps for onboarding a User

1. User provides information about how views + downloads are being recorded.
   
   1.1. If views + downloads are not being recorded via Google Analytics, or Matomo (or another Measure already supported):
      
      1.1.1. Provider creates a new Measure in the Metrics API database.
      
      1.1.2. Provider adds definition for new Measure to public website listing measures (or to this data: [Measures API response] [3] and have the public website run off that data).
      
      1.1.3. User configures Access Logs Driver to point to the access logs.
      
      1.1.4. User configures Access Logs Driver to identify ‘reads’, ‘views’, ‘downloads’ against access logs (ie using RegEx).


2. User registers an account on the Alt Metrics Service.
   
   2.1. Provider approves account to allow User to post metrics to Metrics API.
   
   2.2. User registers Identifiers on the Alt Metrics service for all existing content.
   
   2.3. User sets up periodic tasks to register Identifiers on the Alt Metrics Service for new content - EITHER:
      
      2.3.1. Use the existing method.
      
      2.3.2. Create new local method and post to API.


3. User installs and sets up Identifier Translation Service
   
   3.1. User creates a local database
   
   3.2. User registers Identifiers on the Identifier Translation Service for all existing content
   
   3.3. User sets up periodic tasks to register Identifiers on the Identifier Translation Service for new content - EITHER:
      
      3.3.1. Use existing method
      
      3.3.2. Create a new local method and post to the API.


4. User installs and sets up Metrics Drivers Wrapper
   
   4.1. User creates a local database
   
   4.2. User selects and configures the Drivers
      
      4.2.1. Refer to the drivers list above or the driver's page [Drivers][7] to select the drive(s) needed. 
   
   4.3. User sets Metrics Drivers Wrapper tasks to run periodically
   
   4.4. Provider sets up RabbitMQ virtual host for this User and sends settings


5. Tests are run
   
   5.1. Provider gives instructions on how to run the Simulation Test
   
   5.2. User runs Simulation Test and sends output to Provider
   
   5.3. Provider explains the output to User
   
   5.4. User confirms if this is the output that was expected


6. User installs and configures the [metrics widget][8].
7. User arranges a schedule for manually refreshing metrics.
8. Be prepared to make software updates at the Provider’s request (for performance, quality, or security improvements, or to extend the functionality)
9. Please contact [Rowan Hatherley][21] or [Cristian Garcia][24] for any enquiries or issues.

## Process diagram for onboarding user
![Process Diagram](/images/user-onboarding.png)

## Follow up
Once the system is working as expected to add the new metrics to the OPERAS system follow the next documentation: [Onboarding metrics][11]



[1]: https://metrics.operas-eu.org/docs/identifier-translation-service "Translator"
[2]: https://metrics.operas-eu.org/measures "Measures"
[3]: https://metrics-api.operas-eu.org/measures "Measures-API"
[4]: https://metrics-api.operas-eu.org/events "Events"
[5]: https://altmetrics.operas-eu.org/register "Register"
[6]: https://altmetrics.operas-eu.org/api/get_token "Get Token"
[7]: https://altmetrics.operas-eu.org/api/drivers "drivers"
[8]: https://metrics.operas-eu.org/docs/widget "Widget"
[9]: mailto:cristian.garcia@ubiquitypress.com "Cristian Garcia email address"
[10]: mailto:rowan.hatherley@ubiquitypress.com "Rowan Hatherley email address"
[11]: https://metrics.operas-eu.org/docs/onboarding-metrics "Onboarding metrics"
