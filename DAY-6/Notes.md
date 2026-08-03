# Day-6 Notes

## SOQL (Salesforce Object Query Language)
- Used to retrieve records from Salesforce objects.
- Similar to SQL but works only with Salesforce data.
- Retrieve only the fields required for business logic.

Example:
SELECT CGPA__c FROM Student__c

## DML (Data Manipulation Language)
Used to modify Salesforce records.

Operations:
- insert
- update
- delete
- undelete
- upsert

## Business Transaction Flow

Receive Request
↓
Retrieve Student
↓
Retrieve Job
↓
Check Duplicate Application
↓
Validate Eligibility
↓
Create Application
↓
Save Record
↓
Display Result

## What I Practiced

- Retrieved Student records using SOQL.
- Checked duplicate applications using SOQL.
- Inserted Application records using DML.
- Updated Application Status using DML.
- Tested Apex using Execute Anonymous.
- Verified output through Debug Logs.

## Engineering Principles Learned

- Retrieve data before making business decisions.
- Perform business validation before DML operations.
- Query only required fields.
- Keep business logic inside service classes.
- Test every change before deployment.
