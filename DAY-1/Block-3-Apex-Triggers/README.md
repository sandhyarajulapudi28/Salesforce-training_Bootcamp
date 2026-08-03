# Block 3: Apex Triggers

## Objective

The objective of this task was to understand Apex Triggers and implement business automation in Salesforce using a Trigger and a separate Trigger Handler class.

## Scenario

Using the **Hospital OPD Management System** created in Block 1, I implemented automation for appointment records.

## Tasks Performed

### Before Insert Trigger

* Created a **Before Insert** trigger to prevent duplicate appointment records.
* Displayed a user-friendly error message when a duplicate appointment was detected.

### After Update Trigger

* Created an **After Update** trigger to automatically update a related record whenever an appointment was modified.

### Trigger Handler

* Implemented the business logic in a separate Trigger Handler class.
* Kept the trigger lightweight by calling methods from the handler class, following Salesforce best practices.

## Expected Outcome

* Duplicate appointment records are prevented before insertion.
* Related records are updated automatically after record modifications.
* Trigger logic is separated into a handler class for better maintainability and scalability.

## Files Included

* Apex Trigger
* Trigger Handler Class
* Screenshots demonstrating:

  * Duplicate record validation
  * Related record update

## Key Concepts Learned

* Apex Triggers
* Trigger Context Variables
* Before Insert Trigger
* After Update Trigger
* Trigger Handler Pattern
* Business Logic Separation
* Salesforce Automation

## Learning Outcome

This activity helped me understand how Apex Triggers automate business processes in Salesforce. I learned how to validate records before saving, update related records automatically after changes, and organize trigger logic using the Trigger Handler pattern to improve code readability and maintainability.
