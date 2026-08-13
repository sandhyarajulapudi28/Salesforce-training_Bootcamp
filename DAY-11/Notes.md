
# `notes.md`

``markdown
# Day 11 Notes – Salesforce API Integration

## 1. Salesforce Integration

Salesforce applications often need to communicate with external systems.

Examples:

- Recruitment systems
- Payment systems
- Email services
- HR systems
- External databases
- Third-party REST APIs

Salesforce can communicate with these systems using HTTP callouts and REST APIs.

---

## 2. REST API

REST APIs allow applications to communicate over HTTP.

Common HTTP methods:

- GET – Retrieve data
- POST – Send or create data
- PUT – Update data
- PATCH – Partially update data
- DELETE – Delete data

In this project, a POST request was used to send candidate information to the external recruitment API.

---

## 3. HTTP Callout

An Apex HTTP callout allows Salesforce to send an HTTP request to an external service.

Basic structure:

``java
HttpRequest request = new HttpRequest();

request.setEndpoint('callout:Recruitment_API/post');
request.setMethod('POST');

Http http = new Http();

HttpResponse response = http.send(request);
