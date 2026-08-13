public class CandidateSyncQueueable implements Queueable, Database.AllowsCallouts {

    private Id applicationId;

    public CandidateSyncQueueable(Id applicationId) {
        this.applicationId = applicationId;
    }

    public void execute(QueueableContext context) {

        Application__c application = [
            SELECT Id,
                   Name,
                   Status__c,
                   Student__c,
                   Student__r.Name,
                   Student__r.Email__c,
                   Student__r.CGPA__c,
                   Job__c,
                   Job__r.Name,
                   Job__r.Company_Name__c
            FROM Application__c
            WHERE Id = :applicationId
            LIMIT 1
        ];

        HttpRequest request = new HttpRequest();

        request.setEndpoint(
            'callout:Recruitment_API/post'
        );

        request.setMethod('POST');
        request.setTimeout(120000);

        request.setHeader(
            'Content-Type',
            'application/json'
        );

        Map<String, Object> candidate = new Map<String, Object>();

        candidate.put('applicationId', application.Id);
        candidate.put('studentId', application.Student__c);
        candidate.put('name', application.Student__r.Name);
        candidate.put('email', application.Student__r.Email__c);
        candidate.put('cgpa', application.Student__r.CGPA__c);
        candidate.put('jobId', application.Job__c);
        candidate.put('job', application.Job__r.Name);
        candidate.put('company', application.Job__r.Company_Name__c);
        candidate.put('selectionDate', String.valueOf(Date.today()));

        request.setBody(
            JSON.serialize(candidate)
        );

        Http http = new Http();

        try {

            HttpResponse response = http.send(request);

            System.debug(
                'Recruitment API Status: ' +
                response.getStatusCode()
            );

            System.debug(
                'Recruitment API Response: ' +
                response.getBody()
            );

            // Successful API response
            if (response.getStatusCode() >= 200 &&
                response.getStatusCode() < 300) {

                Map<String, Object> responseData =
                    (Map<String, Object>) JSON.deserializeUntyped(
                        response.getBody()
                    );

                Application__c updateApplication =
                    new Application__c();

                updateApplication.Id = application.Id;

                updateApplication.Integration_Status__c = 'Sent';

                updateApplication.Last_Integration_Attempt__c =
                    Datetime.now();

                updateApplication.Integration_Error__c = null;

                // Read external candidate ID if API returns it
                if (responseData.containsKey('candidateId')) {

                    updateApplication.External_Candidate_Id__c =
                        String.valueOf(
                            responseData.get('candidateId')
                        );
                }

                update updateApplication;
            }

            // API returned an error
            else {

                Application__c updateApplication =
                    new Application__c();

                updateApplication.Id = application.Id;

                updateApplication.Integration_Status__c = 'Failed';

                updateApplication.Last_Integration_Attempt__c =
                    Datetime.now();

                updateApplication.Integration_Error__c =
                    'API Error ' +
                    response.getStatusCode() +
                    ': ' +
                    response.getBody();

                update updateApplication;
            }

        } catch (Exception e) {

            System.debug(
                'Recruitment API Error: ' +
                e.getMessage()
            );

            Application__c updateApplication =
                new Application__c();

            updateApplication.Id = application.Id;

            updateApplication.Integration_Status__c = 'Failed';

            updateApplication.Last_Integration_Attempt__c =
                Datetime.now();

            updateApplication.Integration_Error__c =
                e.getMessage();

            update updateApplication;
        }
    }
}