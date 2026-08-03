import { LightningElement, wire } from 'lwc';
import getAppointments from '@salesforce/apex/AppointmentController.getAppointments';

export default class AppointmentList extends LightningElement {

    @wire(getAppointments)
    appointments;

}
