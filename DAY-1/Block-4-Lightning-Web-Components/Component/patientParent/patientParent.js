import { LightningElement } from 'lwc';

export default class PatientParent extends LightningElement {

    patientId = 'a00dL00003YVydvQAD';

    message = 'Waiting for Child...';

    handleNotify(event) {
        this.message = event.detail;
    }

}
