# Day-7 Notes

## Apex Trigger

- Apex Triggers execute automatically when record events occur.
- They respond to business events instead of waiting for user actions.
- Triggers support automation when records are inserted, updated, deleted, or restored.
- A Trigger should remain small and delegate work to Service classes.

---

## Before Trigger

- Executes before records are saved to the database.
- Used to validate business rules.
- Can prevent invalid records from being saved using "addError".
- Ensures only valid data enters Salesforce.

---

## Trigger Responsibilities

- Observe business events.
- Detect record changes.
- Call the appropriate Service class.
- Keep the Trigger clean and lightweight.
- Avoid placing business logic directly inside the Trigger.

---

## Service Responsibilities

- Validate business rules.
- Retrieve records using SOQL.
- Perform business processing.
- Execute DML operations when required.
- Return meaningful success or error messages.

---

## Business Flow

Record Created
      ↓
Application Trigger
      ↓
ApplicationService
      ↓
SOQL Queries
      ↓
Business Validation
      ↓
DML Operation
      ↓
Success / Error Message


## Key Learning

- Triggers automate business processes based on record events.
- Keep Triggers lightweight and reusable.
- Separate automation from business logic.
- Store business logic inside Service classes.
- Test Trigger behavior using record creation and Debug Logs.
- Clean architecture makes Salesforce applications easier to maintain and extend.
