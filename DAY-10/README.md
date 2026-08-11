# Day 10 – Component Communication, Forms, LDS and Reusable LWC Architecture

## Overview

Day 10 focused on building a more complete Salesforce application by connecting Lightning Web Components (LWC) with Apex and designing the application with clear responsibilities.

As part of the Student Placement Portal, I enhanced the Eligible Jobs component to load job information from Salesforce, display job details, accept student applications, and prevent duplicate applications.

---

## Objectives

- Build an LWC application with clear responsibilities.
- Connect LWC with Apex methods.
- Retrieve job records dynamically from Salesforce.
- Display loading, error, and empty states.
- Build forms using Lightning base components.
- Perform client-side form validation.
- Create Application records using Apex.
- Prevent duplicate applications.
- Display success and error messages using toast notifications.
- Connect UI behaviour with Salesforce business logic.
- Understand reactive state management in LWC.

---

## Technologies Used

- Salesforce
- Lightning Web Components (LWC)
- Apex
- SOQL
- DML
- Salesforce Custom Objects
- Lightning Base Components
- VS Code
- Salesforce CLI
- Git & GitHub

---

## Project Scenario

The Student Placement Portal allows students to view available job opportunities and apply for jobs.

For this implementation:

- Student record used: `raj
- Job: `Software Developer(Trainee)
- Company: `Swasti AI Solutions pvt.ltd
- Minimum CGPA: `7.5

The application is stored in the custom `Application__c object.

---

## LWC Implementation

### Eligible Jobs

The `eligibleJobs LWC retrieves available jobs from Apex.

The component provides:

- Job listing
- Loading state
- Error state
- Empty state
- View Details functionality
- Apply functionality
- Application form
- Success and error notifications

---

## Apex Implementation

### EligibleJobsController

The Apex controller contains two main methods.

### `getEligibleJobs()`

Retrieves jobs whose closing date is today or later.

apex
@AuraEnabled(cacheable=true)
public static List<Job__c> getEligibleJobs()
