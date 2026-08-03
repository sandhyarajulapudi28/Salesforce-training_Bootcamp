import { LightningElement, api, wire } from 'lwc';
import getPatient from '@salesforce/apex/PatientController.getPatient';

export default class PatientChild extends LightningElement {

    @api patientId;

    patient;

    @wire(getPatient, { patientId: '$patientId' })
    wiredPatient({ error, data }) {
        if (data) {
            this.patient = data;
        } else if (error) {
            console.error(error);
        }
    }

    sendEvent() {
        const notifyEvent = new CustomEvent('notify', {
            detail: 'Message received from Child!'
        });

        this.dispatchEvent(notifyEvent);
    }
}
