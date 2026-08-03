public class SOQLExamples {

    public static void getStudents() {

        List<Student__c> students = [
            SELECT Id, Name, CGPA__c
            FROM Student__c
        ];

        System.debug('Total Students: ' + students.size());

        for(Student__c s : students){
            System.debug('Student: ' + s.Name + ' | CGPA: ' + s.CGPA__c);
        }
    }

}
