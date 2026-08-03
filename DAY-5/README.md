# Day 5 – Building Business Logic with Apex

## Objective

Implemented business logic for the Placement Management System using Apex. Created an Apex service to process student applications by validating business rules before saving records.

---

## What did you build?

Created an **ApplicationService** Apex class with a `submitApplication()` method to:

- Prevent duplicate applications.
- Validate student CGPA.
- Save a new application record.
- Return meaningful success or failure messages.

---

## Business Rules Implemented

- A student cannot apply for the same job more than once.
- Students with a CGPA below 6.0 are not eligible to apply.
- Eligible applications are saved successfully.

---

## Apex Concepts Used

- Apex Class
- Methods
- Parameters
- SOQL
- DML (Insert)
- Conditional Statements (if)
- Return Statements

---

## SOQL Query Used

Retrieved student details and checked for existing applications before processing the request.

---

## DML Operation Used

Inserted a new `Application__c` record after all validations passed.

---

## Testing

Tested the Apex class using **Execute Anonymous Window** in the Developer Console.

Observed results:

- Application submitted successfully.
- Duplicate application is not allowed.
- Student is not eligible due to low CGPA.

---

## What did I learn today?

- Importance of business logic in enterprise applications.
- Creating Apex classes and methods.
- Using SOQL to retrieve records.
- Using DML to save records.
- Implementing business validations.
- Testing Apex code using Execute Anonymous.

---

## Technologies Used

- Salesforce Apex
- SOQL
- DML
- Developer Console
- Execute Anonymous

---

## Submission Files

- Apex Class (ApplicationService.cls)
- Screenshots
- Execute Anonymous Output
- GitHub Repository
- README.md
