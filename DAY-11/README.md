# Day 11 – Salesforce API Integration

## Chapter 11: Crossing the Salesforce Boundary

Day 11 focused on integrating Salesforce with an external system using REST APIs, Named Credentials, External Credentials, Permission Sets, and Queueable Apex.

The main objective was to build a secure integration where a selected candidate from a Salesforce Application record can be sent to an external Recruitment API.

---

## Learning Objectives

By completing Day 11, I learned how to:

- Understand Salesforce REST API integration.
- Configure External Credentials.
- Configure External Credential Principals.
- Create and configure Named Credentials.
- Provide external credential access using Permission Sets.
- Perform HTTP callouts from Apex.
- Use Queueable Apex for asynchronous processing.
- Implement Database.AllowsCallouts`.
- Send Salesforce record data as JSON to an external API.
- Handle successful and failed API responses.
- Store integration status and error information on Salesforce records.
- Test Salesforce-to-external-system communication.

---

## Technologies Used

- Salesforce Developer Edition
- Apex
- Queueable Apex
- REST API
- HTTP Callouts
- Named Credentials
- External Credentials
- Permission Sets
- VS Code
- Salesforce CLI
- Postman Echo / HTTP test API

---

## Integration Architecture

The integration follows this flow:

Salesforce Application  
↓  
CandidateSyncQueueable  
↓  
Named Credential  
↓  
External Credential  
↓  
External API  
↓  
HTTP Response  
↓  
Application Integration Status

---

## Salesforce Configuration

### 1. External Credential

Created an External Credential:

**Label:** Recruitment API External

The External Credential is used to manage authentication and external access configuration.

---

### 2. External Credential Principal

Configured:

**RecruitmentAPIPrincipal**

The principal was enabled for the Permission Set so that the Salesforce user can authenticate through the external credential.

---

### 3. Permission Set

Created:

**Recruitment API Access**

The Permission Set provides access to the Recruitment API external credential principal.

The Permission Set was assigned to:

**RAJULAPUDI SANDHYA**

---

### 4. Named Credential

Created:

**Label:** Recruitment API

**Name:** Recruitment_API`

The Named Credential provides the endpoint used by Apex callouts.

The endpoint was configured for the external API and connected with:

**Recruitment API External**

---

## Apex Integration

The integration was implemented using the Queueable Apex class:

CandidateSyncQueueable`

The class implements:

Queueable, Database.AllowsCallouts
