# Block 2: Governor Limits & Bulkification

## Objective

The objective of this task was to understand Salesforce Governor Limits and learn how to write bulk-safe Apex Triggers using best practices.

## Tasks Performed

### Bad Trigger Implementation
- Created a trigger with SOQL inside a loop.
- Inserted 200+ records to intentionally trigger a Governor Limit exception.
- Observed the "Too many SOQL queries: 101" error.

### Bulkified Trigger
- Refactored the trigger by moving SOQL queries outside the loop.
- Used Lists and Maps to process records efficiently.
- Re-tested the trigger with 200+ records.

## Expected Outcome

Successfully demonstrated the impact of Governor Limits and implemented a bulkified solution that processed all records without errors.

## Key Concepts Learned

- Governor Limits
- Bulkification
- SOQL Outside Loops
- DML Outside Loops
- Lists
- Maps
- Trigger Optimization

## Learning Outcome

This exercise helped me understand why Salesforce enforces Governor Limits and how to design scalable Apex code that can handle large batches of records efficiently.
