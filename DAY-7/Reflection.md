# Day-7 Reflection

Today I learned how Salesforce uses Apex Triggers to automate business processes whenever important record events occur. I understood that Triggers should only observe events and delegate business logic to Service classes, keeping the architecture clean and maintainable.

During this sprint, I created an **ApplicationTrigger** that automatically validates Application records before insertion. The Trigger works together with the **ApplicationService** class, which retrieves Student and Job information using SOQL, validates eligibility, checks for duplicate applications, and creates records using DML.

I tested multiple scenarios, including successful application submission and duplicate application prevention, and verified the results using Execute Anonymous, Debug Logs, and Salesforce records.

This sprint strengthened my understanding of event-driven automation, Trigger architecture, SOQL, DML, and the importance of separating responsibilities in enterprise Salesforce applications.
