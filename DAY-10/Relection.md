# Day 10 Notes

## Topic

Component Communication, Forms, LDS and Reusable LWC Architecture

---

## 1. LWC Application Architecture

A Lightning Web Component application should be designed as a collection of focused components and responsibilities rather than putting everything into one large component.

Each part of the application should have a clear responsibility.

---

## 2. LWC and Apex Communication

The `eligibleJobs component communicates with Apex using imported Apex methods.

javascript
import getEligibleJobs from '@salesforce/apex/EligibleJobsController.getEligibleJobs';
import submitApplication from '@salesforce/apex/EligibleJobsController.submitApplication';
