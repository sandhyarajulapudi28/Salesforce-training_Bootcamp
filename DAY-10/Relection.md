# Day 10 Reflection

## What I Learned

Day 10 helped me understand how a Salesforce application can be designed using multiple responsibilities instead of putting all the logic into one place.

I learned how Lightning Web Components can communicate with Apex to retrieve and process Salesforce data.

---

## LWC and Apex

I learned how to import Apex methods into an LWC and call them from JavaScript.

In my Student Placement Portal, the `eligibleJobs` component calls Apex to retrieve available jobs and to submit applications.

This helped me understand how the user interface and server-side logic work together.

---

## Forms and Validation

I learned how to build forms using Salesforce Lightning base components such as `lightning-input`.

I also implemented client-side validation to make sure required information is entered before submitting an application.

---

## Business Logic

One of the most important things I learned was the difference between user interaction and business logic.

The LWC handles the user's actions, while Apex handles the important Salesforce business rule of preventing duplicate applications.

For example, before creating an application, Apex checks whether the selected student has already applied for the selected job.

---

## Application Testing

I tested the complete application flow:

1. Loading eligible jobs.
2. Viewing job details.
3. Opening the application form.
4. Submitting an application.
5. Verifying the Application record in Salesforce.
6. Attempting to submit the same application again.
7. Confirming that the duplicate application was prevented.

---

## Challenges

One challenge was connecting the LWC interface with the Salesforce records and making sure the correct Student and Job records were used when creating an Application.

I also had to make sure that the application submission logic handled both successful submissions and existing applications correctly.

---

## Key Takeaway

My main takeaway from Day 10 is that a good Salesforce application needs clear separation between UI responsibilities and business responsibilities.

The LWC should focus on user interaction and presentation, while Apex should handle Salesforce data access and important business rules.

This makes the application easier to maintain, test, and extend.

---

## Final Reflection

After completing Day 10, my Student Placement Portal is more than just a user interface.

It can now retrieve Salesforce data, display job opportunities, accept student applications, create Application records, and prevent duplicate applications.

This sprint helped me understand how different parts of a Salesforce application can work together as one complete system.
