public with sharing class PatientController {

    @AuraEnabled(cacheable=true)
    public static Patient__c getPatient(Id patientId){

        return [
            SELECT Id, Name
            FROM Patient__c
            WHERE Id=:patientId
            LIMIT 1
        ];

    }

}