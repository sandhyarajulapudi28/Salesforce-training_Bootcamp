public with sharing class EligibleJobsController {

    @AuraEnabled(cacheable=true)
    public static List<Job__c> getEligibleJobs() {

        return [
            SELECT Id,
                   Name,
                   Company_Name__c,
                   Closing_Date__c,
                   Minimum_CGPA__c
            FROM Job__c
            WHERE Closing_Date__c >= TODAY
            ORDER BY Closing_Date__c ASC
        ];
    }


    @AuraEnabled
    public static String submitApplication(
        Id jobId,
        String studentName
    ) {

        Student__c student = [
            SELECT Id
            FROM Student__c
            WHERE Name = :studentName
            LIMIT 1
        ];

        // Check whether application already exists
        List<Application__c> existingApplications = [
            SELECT Id, Name, Status__c
            FROM Application__c
            WHERE Job__c = :jobId
            AND Student__c = :student.Id
            LIMIT 1
        ];

        if (!existingApplications.isEmpty()) {

            return 'EXISTS:' +
                   existingApplications[0].Name +
                   ':' +
                   existingApplications[0].Status__c;
        }

        Application__c application = new Application__c();

        application.Job__c = jobId;
        application.Student__c = student.Id;
        application.Application_Date__c = Date.today();
        application.Status__c = 'Applied';

        insert application;

        return 'CREATED:' + application.Name;
    }
}
