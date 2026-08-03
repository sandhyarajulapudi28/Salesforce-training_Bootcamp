public with sharing class AppointmentController {

    @AuraEnabled(cacheable=true)
    public static List<Appointment__c> getAppointments() {

        return [
            SELECT Id,
                   Name,
                   Status__c,
                   Appointment_Date__c
            FROM Appointment__c
        ];
    }
}