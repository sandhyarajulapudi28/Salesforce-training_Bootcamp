\# Day 12 Reflection



\## 1. Before this sprint, where did you think Salesforce application code lived?



Before this sprint, I mainly thought that the Salesforce application code and configuration lived inside the Salesforce Developer Org.



After learning about Git and source-driven development, I understand that the Salesforce org is an environment, while the source representation of the application should be maintained in a Git repository.



This makes the project easier to track, review, reproduce and deploy.



\---



\## 2. Why is Git important even if Salesforce already stores the code?



Salesforce stores the application metadata and code inside the org, but Git provides version control and collaboration.



Git allows developers to:



\- Track changes

\- Maintain history

\- Create branches

\- Review changes

\- Work with other developers

\- Revert changes when required

\- Maintain a remote copy of the project



Therefore, Git and the Salesforce org have different roles.



The org is an environment, while Git acts as the source-controlled record of development.



\---



\## 3. What is the difference between metadata and business data?



Metadata describes the structure and configuration of the Salesforce application.



Examples include:



\- Objects

\- Fields

\- Apex Classes

\- Triggers

\- LWC

\- Flows

\- Permissions



Business data represents actual records stored in the application.



Examples include:



\- Student records

\- Application records

\- Job records

\- Offer records



Therefore:



Metadata → Describes how the application is built

Data     → Represents actual business records

