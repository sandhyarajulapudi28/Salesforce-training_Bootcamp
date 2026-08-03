# Block 1: Data Model Refresh

## Objective

The objective of this task was to understand Salesforce Data Modeling by designing and implementing a Hospital OPD (Outpatient Department) management system using custom objects and object relationships in Salesforce.

## Scenario

**Hospital OPD Management System**

The data model was designed to manage patients, doctors, appointments, and prescriptions within a hospital. The relationships between these objects were created to represent real-world healthcare workflows.

## Objects Created

* **Patient** (Custom Object)
* **Doctor** (Custom Object)
* **Appointment** (Custom Object)
* **Prescription** (Custom Object)

## Relationships Implemented

* Patient → Appointment (Lookup Relationship)
* Doctor → Appointment (Lookup Relationship)
* Appointment → Prescription (Master-Detail Relationship)

## Tasks Performed

* Designed the data model before implementation.
* Created custom objects in the Salesforce Trailhead Playground.
* Established relationships between the objects using Lookup and Master-Detail fields.
* Verified the relationships in Object Manager.
* Captured screenshots of the completed data model.

## Expected Outcome

Successfully created multiple custom objects with relationship fields connecting them. The data model accurately represents a Hospital OPD workflow and was verified through Salesforce Object Manager.

## Key Concepts Learned

* Salesforce Data Modeling
* Custom Objects
* Lookup Relationships
* Master-Detail Relationships
* Object Relationships
* Business Process Modeling

## Learning Outcome

This activity helped me understand how Salesforce models real-world business processes using custom objects and relationships. I learned when to use Lookup relationships for flexible associations and Master-Detail relationships when the child record should depend on the parent record. This exercise strengthened my understanding of designing scalable and organized data models in Salesforce.
