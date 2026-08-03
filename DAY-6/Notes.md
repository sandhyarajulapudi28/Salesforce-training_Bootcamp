# Day-6 Notes

## SOQL
- Used to retrieve records.
- Similar to SQL but works only with Salesforce objects.
- Retrieves only required fields.

Example:
SELECT Name, CGPA__c FROM Student__c

## DML Operations
- insert
- update
- delete
- undelete
- upsert

## Business Flow
Retrieve Data
↓
Validate Business Rules
↓
Modify Data
↓
Display Result

## Key Learning
- Retrieve information before making decisions.
- Update records only after validation.
- Test Apex using Execute Anonymous.
- Verify output using Debug Logs.
