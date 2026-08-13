\# DAY-12 – From Developer Org to Production



\## Sprint 12 – Git, Salesforce CLI, Metadata, Sandboxes and Deployment



Day 12 focused on understanding how a Salesforce application is managed professionally using version control, Salesforce CLI, metadata, deployment processes and controlled environments.



The main goal was to move the Placement Management System from being only an application inside a Salesforce Developer Org toward a source-controlled and reproducible development workflow.



\---



\## Learning Objectives



During this sprint, I learned:



\- Why Git and version control are important in Salesforce development

\- Git repositories, commits, pushes, pulls and branches

\- Pull Requests and code reviews

\- Git merge conflicts

\- Salesforce metadata and its source representation

\- Salesforce CLI and the modern `sf` command

\- Salesforce org authentication and aliases

\- Retrieving metadata from Salesforce

\- Deploying metadata to a Salesforce org

\- Sandboxes and their purpose

\- Scratch Orgs and source-driven development

\- Changesets

\- Metadata API

\- Deployment dependencies

\- Testing before deployment

\- Controlled deployment workflows

\- Professional Salesforce repository structure



\---



\## Project Used



\### Placement Management System



The existing Placement Management System developed during the previous sprints was organized into a source-controlled Salesforce project.



The project contains:



\- Salesforce Custom Objects

\- Custom Fields

\- Apex Classes

\- Apex Triggers

\- Queueable Apex

\- Batch Apex

\- Scheduled Apex

\- Lightning Web Components

\- SOQL

\- Flows

\- REST Integration

\- Named Credentials

\- External System Communication

\- Integration Status and Error Handling



\---



\## Repository Structure



The Day 12 project follows a Salesforce source-driven structure:



```text

PlacementManagementSystem/

│

├── force-app/

│   └── main/

│       └── default/

│           ├── classes/

│           ├── triggers/

│           ├── lwc/

│           ├── objects/

│           └── flows/

│

├── config/

├── manifest/

├── scripts/

├── .gitignore

├── .forceignore

├── package.json

├── sfdx-project.json

└── README.md

