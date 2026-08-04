# Day-7 Reflection

Today I learned how Apex Triggers automate business processes in Salesforce. I understood that Triggers should only respond to record events and delegate business logic to Service classes.

I created a Before Insert Trigger for the Application object and connected it with the ApplicationService class. While testing, I verified that duplicate applications were automatically prevented before the record was saved.

This sprint helped me understand clean Trigger architecture, separation of responsibilities, and how event-driven automation works in enterprise Salesforce applications.
