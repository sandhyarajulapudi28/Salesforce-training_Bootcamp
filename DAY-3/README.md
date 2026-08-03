# Day 3 – Salesforce Automation

## Objective
Implemented automation for the Placement Management System using Salesforce Flows and Validation Rules.

---

## 1. Which requirements did you solve using Flow?

The following requirements were automated using Record-Triggered Flows:

- Automatically populate the Application Date when a new application is created.
- Send an email notification after a successful application submission.
- Automatically create an Offer Letter record when the application status becomes "Selected".

---

## 2. Which requirements required Validation Rules?

The following business rules were implemented using Validation Rules:

- Prevent students with a CGPA below the required value from applying.
- Prevent applications after the job closing date.

These rules ensure only valid records are saved.

---

## 3. Which requirements still needed Apex?

The following requirements required Apex because they involve more complex business logic:

- Prevent duplicate applications for the same student and job.
- Perform advanced eligibility checks before saving an application.
- Handle future business logic that cannot be achieved using only Flows or Validation Rules.

---

## 4. Why did you choose those solutions?

- **Flow** was used for automation without writing code.
- **Validation Rules** were used to prevent invalid data from being saved.
- **Apex** was chosen for complex business logic that requires custom programming and decision-making.

---

## Technologies Used

- Salesforce Flow
- Validation Rules
- Salesforce Objects
- Lightning Platform

---

## Learning Outcome

- Created Record-Triggered Flows.
- Implemented Validation Rules.
- Understood when to use Flow, Validation Rules, and Apex.
- Learned how Salesforce automation improves business processes.
