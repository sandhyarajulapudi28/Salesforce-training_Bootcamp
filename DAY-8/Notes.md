# Day-8 Notes

## Objective

Learn and implement Salesforce Asynchronous Apex for handling long-running operations.

## Topics Learned

### Future Method

- Executes methods asynchronously.
- Uses the `@future` annotation.
- Suitable for callouts and background processing.

### Queueable Apex

- More flexible than Future Methods.
- Supports complex objects.
- Allows job chaining.

### Batch Apex

- Processes large volumes of records.
- Implements:
  - start()
  - execute()
  - finish()

### Scheduled Apex

- Automates Apex execution at specified times.
- Uses the `System.schedule()` method.

### Anonymous Apex

Used to test:

- Trigger execution
- Future Method
- Queueable Job
- Batch Job
- Scheduler

## Key Learning

Asynchronous Apex improves performance by executing long-running processes in the background without affecting the user experience.
