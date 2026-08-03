public class ApplicationService {

    public static String submitApplication(Id studentId, Id jobId) {

        // Check duplicate application
        List<Application__c> applications = [
            SELECT Id
            FROM Application__c
            WHERE Student__c = :studentId
            AND Job__c = :jobId
        ];

        if (!applications.isEmpty()) {
            return 'Duplicate application is not allowed.';
        }

        // Get student details
        Student__c student = [
            SELECT CGPA__c
            FROM Student__c
            WHERE Id = :studentId
            LIMIT 1
        ];

        // Check CGPA
        if (student.CGPA__c < 6.0) {
            return 'Student is not eligible due to low CGPA.';
        }

        Application__c application = new Application__c();

        application.Student__c = studentId;
        application.Job__c = jobId;
        
        insert application;
        
        return 'Application submitted successfully.';
    }

}
