# Day-6: Making Software Talk to Data with SOQL and DML

## Objective
Learn how Apex interacts with Salesforce data using SOQL and DML operations while building business transactions for the Placement Management System.

## What I Built
- Created Apex classes for SOQL and DML examples.
- Retrieved Student records using SOQL.
- Updated Student records using DML.
- Enhanced the `ApplicationService` class to:
  - Retrieve Student records using SOQL.
  - Check for duplicate applications.
  - Validate student CGPA.
  - Create and insert Application records.
  - Update Application Status using DML.
- Executed Apex code using Execute Anonymous.
- Verified the results using Debug Logs and Salesforce records.

## SOQL
SOQL (Salesforce Object Query Language) is used to retrieve records from Salesforce objects before making business decisions.

## DML
DML (Data Manipulation Language) is used to create, update, and modify Salesforce records.

## What I Learned
- How to retrieve Salesforce records using SOQL.
- How to create and update records using DML.
- How to combine SOQL and DML inside Apex.
- How Execute Anonymous helps test Apex code.
- Why business validations should happen before DML operations.
- Importance of verifying results using Debug Logs.

## Files Included
- ApplicationService.cls
- SOQLExamples.cls
- DMLExamples.cls
- Screenshots
- Notes.md
- Reflection.md
