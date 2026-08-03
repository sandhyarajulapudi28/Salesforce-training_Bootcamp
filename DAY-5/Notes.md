# Day 5 Notes

## Topics Covered

- Business Logic
- Apex Classes
- Apex Methods
- Parameters
- SOQL
- DML Operations
- Conditional Statements
- Execute Anonymous
- Developer Console

---

## Key Concepts

### Apex Class
A class is used to organize business logic.

Example:
public class ApplicationService { }

---

### Apex Method

submitApplication(Id studentId, Id jobId)

Purpose:
- Check duplicate applications
- Validate CGPA
- Save application
- Return result message

---

### SOQL

Used to retrieve Salesforce records.

Example:

SELECT Id
FROM Application__c
WHERE Student__c = :studentId
AND Job__c = :jobId

---

### DML

Used to save records.

Example:

insert application;

---

### Business Rules Implemented

- Prevent duplicate applications.
- Validate student CGPA.
- Save eligible applications.

---

## Testing

Used Execute Anonymous Window to test the Apex class.

Expected Results:
- Application submitted successfully.
- Duplicate application is not allowed.
- Student is not eligible due to low CGPA.

---

## Learning Outcome

- Understood business logic.
- Learned Apex programming basics.
- Used SOQL and DML.
- Tested Apex using Developer Console.
