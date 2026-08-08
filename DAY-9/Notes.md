
# Day 9 – Notes

## Main Concept

The purpose of the Eligible Jobs component is to provide students with a simple interface to find suitable placement opportunities without needing to understand Salesforce objects, Apex, or SOQL.

## User Requirement

As a student, I want to view jobs for which I am eligible so that I can identify suitable placement opportunities.

## Eligible Jobs

The component displays important job information such as:

- Company
- Role
- Package
- Location
- Deadline

Additional information can be viewed using the View Details action.

## LWC

The component contains:

- HTML – defines the user interface.
- JavaScript – handles component behaviour and user interaction.
- XML Metadata – defines the component configuration and where it can be used.

## Apex

`EligibleJobsController` retrieves available jobs from Salesforce using SOQL.

Main method:

`getEligibleJobs()`

The method returns jobs whose closing date is today or later.

## User Interaction

The component supports:

1. Viewing available jobs.
2. Viewing additional job details.
3. Opening the application form.
4. Entering applicant information.
5. Validating required information.
6. Submitting the application.

## UI States

The component includes:

- Loading state
- Error state
- Jobs available state
- No eligible jobs state

## Salesforce Data

The project uses Salesforce objects for:

- Students
- Jobs
- Applications

An Application record connects the Student with the selected Job.

## Key Principle

Good architecture hides technical complexity from the user. The student should experience the placement functionality through a simple interface rather than interacting directly with Salesforce technical details.
