# Salesforce Day-8: Asynchronous Apex

## Overview

This project demonstrates the implementation of Salesforce Asynchronous Apex concepts as part of the Salesforce Developer Bridge Program Day-8 assignment.

## Concepts Covered

- Future Method
- Queueable Apex
- Batch Apex
- Scheduled Apex
- Anonymous Apex Testing

## Apex Classes

### 1. ApplicationFutureService
Processes application records asynchronously using the `@future` annotation.

### 2. OfferProcessingJob
Implements Queueable Apex to execute background processing for an application.

### 3. PlacementAnalyticsBatch
Implements Batch Apex to process records in batches.

### 4. ExpiredJobScheduler
Schedules the batch job using the Schedulable interface.

## Testing Performed

- Trigger tested using Anonymous Apex.
- Future Method executed successfully.
- Queueable Apex executed successfully.
- Batch Apex executed successfully.
- Scheduled Apex job created successfully.

## Screenshots Included

- Apex Classes
- Trigger Testing
- Future Method Execution
- Queueable Execution
- Batch Execution
- Scheduler Execution
- Apex Jobs
- Scheduled Jobs

## Technologies Used

- Salesforce Developer Edition
- Apex
- SOQL
- Asynchronous Apex
- Visual Studio Code
- Salesforce CLI
- GitHub
