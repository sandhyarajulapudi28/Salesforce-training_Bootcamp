# Day-7: Apex Triggers – Making Software Respond Automatically

## Objective
Learn how Apex Triggers automatically respond to business events while keeping business logic inside Service classes.

## What I Built
- Created an Apex Trigger on the Application object.
- Delegated validation logic to the ApplicationService class.
- Automatically validated applications before insertion.
- Prevented duplicate applications using Trigger validation.
- Tested the Trigger by creating duplicate application records.
- Verified Trigger execution using Debug Logs.

## Trigger
Apex Triggers execute automatically when records are inserted, updated, or deleted. They help automate business processes based on record events.

## What I Learned
- Purpose of Apex Triggers.
- Difference between Trigger and Service responsibilities.
- Before Insert Trigger execution.
- Importance of keeping business logic outside the Trigger.
- How Trigger.new passes records to Service classes.

## Files Included
- ApplicationTrigger.trigger
- ApplicationService.cls
- Screenshots
- Notes.md
- Reflection.md
