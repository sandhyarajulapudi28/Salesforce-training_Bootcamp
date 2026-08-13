import { LightningElement, api } from 'lwc';

export default class StudentProfile extends LightningElement {

    @api student;

    isEditing = false;

    get isViewMode() {
        return !this.isEditing;
    }

    handleEdit() {
        this.isEditing = true;
    }

    handleCancel() {
        this.isEditing = false;
    }

    handleSave() {

        const inputs = this.template.querySelectorAll('lightning-input');

        let isValid = true;

        inputs.forEach(input => {

            if (!input.reportValidity()) {
                isValid = false;
            }

        });

        if (!isValid) {
            return;
        }

        const emailInput =
            this.template.querySelector('[data-field="email"]');

        const phoneInput =
            this.template.querySelector('[data-field="phone"]');

        const cgpaInput =
            this.template.querySelector('[data-field="cgpa"]');

        this.dispatchEvent(
            new CustomEvent('profilesave', {
                detail: {
                    studentId: this.student.Id,
                    email: emailInput.value,
                    phone: phoneInput.value,
                    cgpa: cgpaInput.value
                }
            })
        );

        this.isEditing = false;
    }
}