# DAY 11 – Salesforce Integration

## Sprint 11 – Crossing the Salesforce Boundary

### Overview

Day 11 focuses on integrating Salesforce with external systems. The Placement Management System is extended to communicate with an external recruitment platform using **REST APIs, Apex Callouts, Queueable Apex, and Named Credentials**.

---

## Business Problem

When a student's application becomes **Selected**, Salesforce should automatically send the candidate information to an external recruitment system.

### Integration Flow
`text
Application Selected
        ↓
      Trigger
        ↓
     Service
        ↓
     Queueable
        ↓
Named Credential
        ↓
     REST API
        ↓
External Recruitment System
        ↓
Integration Status


---

## Topics Covered

* API and REST API fundamentals
* HTTP methods: GET, POST, PUT, PATCH, DELETE
* HTTP requests and responses
* JSON data format
* Salesforce HTTP Callouts
* Queueable Apex for asynchronous processing
* Named Credentials
* Authentication vs Authorisation
* Auth Providers
* External Objects and Salesforce Connect
* Point-to-Point and Middleware integration
* Synchronous vs Asynchronous integration
* Error handling and retry strategy
* Idempotency and duplicate prevention

---

## REST API Contract

### Endpoint

`text
POST /candidates


### Request Example

json
{
  "studentId": "STU10045",
  "name": "Ananya",
  "email": "ananya@example.com",
  "branch": "CSE",
  "cgpa": 8.4,
  "jobId": "JOB1007",
  "company": "KSquare",
  "role": "Salesforce Developer"
}


### Common Responses

| Status  | Meaning                |
| ------- | ---------------------- |
| 200/201 | Success                |
| 400     | Bad Request            |
| 401     | Authentication Failure |
| 403     | Forbidden              |
| 500     | Server Error           |

---

## Security

The integration uses **Named Credentials** instead of hard-coding API URLs, passwords, tokens, or secrets in Apex.

text
Apex
  ↓
Named Credential
  ↓
Authentication
  ↓
External API


Authentication verifies identity, while authorisation determines permissions.

---

## Error Handling and Retry

Integration status can be tracked using values such as:

text
Pending → Sent
       ↘ Failed
       ↘ Retry Required


If the external system temporarily fails, the request can be retried.

**Idempotency** is considered to prevent duplicate candidate creation when the same request is processed more than once.

---

## Integration Pattern

This project uses **asynchronous point-to-point integration**.

* **Queueable Apex** is used because the user does not need to wait for the external system.
* **Point-to-point integration** is suitable for this simple external recruitment use case.
* **Middleware** can be considered when many external systems need to be integrated.

---

## Key Learning

Day 11 helped me understand how Salesforce communicates with external systems securely and reliably.

The main architecture learned is:
`text
Trigger
   ↓
Service
   ↓
Queueable Apex
   ↓
Named Credential
   ↓
REST API
   ↓
External System
   ↓
Response
   ↓
Integration Status


### Technologies

**Salesforce Apex | Queueable Apex | REST API | JSON | HTTP Callouts | Named Credentials | Salesforce Connect**
