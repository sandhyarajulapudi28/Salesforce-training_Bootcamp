# Day 9 – Eligible Jobs & Student Application

## Objective
Build a student-facing Lightning Web Component for the Placement Management System where students can view eligible jobs, see job details, and apply for a job.

## Work Completed

### 1. Eligible Jobs Component
- Created the eligibleJobs` Lightning Web Component.
- Displayed available job opportunities as job cards.
- Displayed key information:
  - Company
  - Role
  - Package
  - Location
  - Closing Date

### 2. View Job Details
- Added a **View Details** button.
- Displays additional job information in a modal.
- Shows:
  - Job
  - Company
  - Minimum CGPA
  - Closing Date
  - Required Skills
  - Eligibility
  - Experience
  - Job Description

### 3. Apply for a Job
- Added an **Apply** button.
- Created an application form with:
  - Full Name
  - Email
  - Phone Number
- Added required-field validation.
- Displays a success message after submission.

### 4. Apex Controller
Created 'EligibleJobsController` to retrieve available jobs from Salesforce using SOQL.

### 5. Salesforce Records
- Created Student records.
- Created Job records.
- Created an Application record.
- Application was associated with the selected Student and Job.

## LWC Structure

text
eligibleJobs/
├── eligibleJobs.html
├── eligibleJobs.js
└── eligibleJobs.js-meta.xml
