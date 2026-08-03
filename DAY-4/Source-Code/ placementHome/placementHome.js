import logo from '@salesforce/resourceUrl/VishnuLogo';
import { LightningElement } from 'lwc';

export default class PlacementHome extends LightningElement {

    logoUrl = logo;

    studentName = 'Sandhya';

    rollNumber = '23PA1A05L1';

    department = 'Computer Science and Engineering';

    today = new Date().toLocaleDateString();

    companies = 25;

    jobs = 63;

    applications = 5;

    status = 'Not Applied';

    message = '';

    showMessage() {
       this.message =
         '🎉  Welcome to Vishnu Placement Portal! Explore opportunities and achieve your dream career.';
    }

    applyNow() {
        this.status = 'Applied ✅';
    }

}
