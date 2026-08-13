import { LightningElement, wire } from 'lwc';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import STUDENT_NAME from '@salesforce/schema/Student__c.Name';
import STUDENT_EMAIL from '@salesforce/schema/Student__c.Email__c';
import STUDENT_PHONE from '@salesforce/schema/Student__c.Phone__c';
import STUDENT_CGPA from '@salesforce/schema/Student__c.CGPA__c';

const FIELDS = [
    STUDENT_NAME,
    STUDENT_EMAIL,
    STUDENT_PHONE,
    STUDENT_CGPA
];

export default class StudentPortal extends LightningElement {

    // raj Student record
    studentId = 'a04dL00000KqTdVQAV';

    student;
    error;
    isSaving = false;

    @wire(getRecord, {
        recordId: '$studentId',
        fields: FIELDS
    })
    wiredStudent({ data, error }) {

        if (data) {

            this.student = {
                Id: data.id,
                Name: data.fields.Name.value,
                Email__c: data.fields.Email__c.value,
                Phone__c: data.fields.Phone__c.value,
                CGPA__c: data.fields.CGPA__c.value
            };

            this.error = undefined;

        } else if (error) {

            this.student = undefined;
            this.error = error;

        }
    }

    async handleProfileSave(event) {

        const updatedFields = event.detail;

        this.isSaving = true;

        const fields = {
            Id: updatedFields.studentId,
            Email__c: updatedFields.email,
            Phone__c: updatedFields.phone,
            CGPA__c: updatedFields.cgpa
        };

        try {

            await updateRecord({ fields });

            this.showToast(
                'Success',
                'Student profile updated successfully.',
                'success'
            );

        } catch (error) {

            this.showToast(
                'Error',
                this.getErrorMessage(error),
                'error'
            );

        } finally {

            this.isSaving = false;
        }
    }

    get hasStudent() {
        return this.student !== undefined;
    }

    get hasError() {
        return this.error !== undefined;
    }

    getErrorMessage(error) {

        if (
            error &&
            error.body &&
            error.body.message
        ) {
            return error.body.message;
        }

        return 'Unable to update student profile.';
    }

    showToast(title, message, variant) {

        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}