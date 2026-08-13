public with sharing class ApplicationService {

    public static void validateApplications(List<Application__c> applications) {

        Set<Id> studentIds = new Set<Id>();
        Set<Id> jobIds = new Set<Id>();

        for (Application__c app : applications) {

            if (app.Student__c != null) {
                studentIds.add(app.Student__c);
            }

            if (app.Job__c != null) {
                jobIds.add(app.Job__c);
            }
        }


        // Check duplicate applications
        if (!studentIds.isEmpty() && !jobIds.isEmpty()) {

            List<Application__c> existingApplications = [
                SELECT Id, Student__c, Job__c
                FROM Application__c
                WHERE Student__c IN :studentIds
                AND Job__c IN :jobIds
            ];


            for (Application__c existing : existingApplications) {

                for (Application__c newApp : applications) {

                    if (
                        existing.Student__c == newApp.Student__c &&
                        existing.Job__c == newApp.Job__c
                    ) {

                        newApp.addError(
                            'You have already applied for this job.'
                        );
                    }
                }
            }
        }
    }
}