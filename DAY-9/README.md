# DAY-9 – Eligible Jobs & Job Applications

## Objective

Implemented an **Eligible Jobs and Job Application feature** for the Vishnu Placement Portal using Salesforce LWC and Apex.

## Work Completed

### 1. Eligible Jobs
- Created the `eligibleJobs Lightning Web Component.
- Displayed available job opportunities.
- Displayed job information such as:
  - Company Name
  - Job Role
  - Package
  - Location
  - Closing Date

### 2. View Details
- Added a **View Details** button for each job.
- Displays the selected job details when clicked.

### 3. Apply for Job
- Added an **Apply** option for eligible jobs.
- Students can submit their application for a selected job.

### 4. Apex Controller
Created EligibleJobsController.cls` with:

- `getEligibleJobs() – Retrieves active jobs using SOQL.
- `submitApplication() – Creates a new Application record.
- Checks whether the student has already applied for the selected job.
- Links the Student and Job with the Application record.
- Sets the application date and status.

### 5. Salesforce Records
- Connected **Student, Job, and Application** records.
- Successfully tested the application flow.
- Verified the created Application record in Salesforce.

## Technologies Used

- Salesforce
- Lightning Web Components (LWC)
- Apex
- SOQL
- HTML
- JavaScript
- Salesforce CLI
- VS Code

## Screenshots

The Screenshots folder contains evidence of:

1. Eligible Jobs
2. View Details
3. Apply Form
4. Application Record

## Result

The **Eligible Jobs and Job Application functionality** was successfully implemented, tested, and documented in Salesforce.
