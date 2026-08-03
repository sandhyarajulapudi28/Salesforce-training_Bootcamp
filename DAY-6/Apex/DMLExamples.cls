public class DMLExamples {

    public static void updateStudentCGPA() {

        Student__c student = [
            SELECT Id, Name, CGPA__c
            FROM Student__c
            LIMIT 1
        ];

        student.CGPA__c = 9.00;

        update student;

        System.debug('Student CGPA updated successfully.');
    }

}
