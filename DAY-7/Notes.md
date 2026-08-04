# Day-7 Notes

## Apex Trigger
- Executes automatically when record events occur.
- Responds to business events instead of user actions.
- Should remain small and delegate work to Service classes.

## Before Trigger
- Executes before records are saved.
- Used for validations.
- Can prevent invalid records using addError().

## Trigger Responsibilities
- Observe business events.
- Call Service classes.
- Avoid business logic inside Trigger.

## Service Responsibilities
- Validate business rules.
- Perform SOQL queries.
- Handle business processing.

## Key Learning
- Keep Triggers lightweight.
- Separate automation from business logic.
- Test Trigger behavior using record creation.
