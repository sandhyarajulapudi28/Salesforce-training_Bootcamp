# Day 02 Notes

## Objective

To understand how Salesforce processes multiple records efficiently and learn best practices for writing scalable Apex code.

---

## Key Learnings

### Apex Collections
- List stores ordered data.
- Set stores unique values only.
- Map stores key-value pairs for fast data retrieval.

### Governor Limits
- Salesforce limits resource usage to ensure fair platform performance.
- Avoid writing SOQL and DML statements inside loops.
- Bulkify code to process multiple records efficiently.

### Bulkification
- Query records outside loops.
- Store data using Lists and Maps.
- Perform DML operations once after processing.

### Asynchronous Apex
- Executes operations in the background.
- Improves application performance.
- Types include:
  - Future Methods
  - Queueable Apex
  - Batch Apex
  - Scheduled Apex

---

## Best Practices

- Write reusable code.
- Keep trigger logic inside Handler Classes.
- Minimize SOQL queries.
- Minimize DML operations.
- Write bulk-safe Apex.

---

## Files Included

- Apex Collection Examples
- Bulkified Trigger
- Screenshots
- Debug Logs
