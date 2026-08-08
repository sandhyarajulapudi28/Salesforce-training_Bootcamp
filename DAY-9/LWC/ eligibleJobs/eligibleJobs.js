import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import getEligibleJobs from '@salesforce/apex/EligibleJobsController.getEligibleJobs';
import submitApplication from '@salesforce/apex/EligibleJobsController.submitApplication';

export default class EligibleJobs extends LightningElement {

    jobs = [];

    isLoading = true;
    hasError = false;

    selectedJob = null;
    selectedApplyJob = null;

    applicantName = '';
    applicantEmail = '';
    applicantPhone = '';

    // We decided this is your Student record
    studentName = 'raj';


    connectedCallback() {
        this.loadJobs();
    }


    loadJobs() {

        this.isLoading = true;
        this.hasError = false;

        getEligibleJobs()
            .then(result => {

                this.jobs = result.map(job => ({
                    id: job.Id,
                    company: job.Company_Name__c,
                    role: job.Name,
                    deadline: job.Closing_Date__c,
                    eligibility:
                        'Minimum CGPA: ' + job.Minimum_CGPA__c
                }));

                this.isLoading = false;
            })
            .catch(error => {

                console.error(error);

                this.hasError = true;
                this.isLoading = false;
            });
    }


    get hasJobs() {
        return this.jobs.length > 0;
    }


    get showDetails() {
        return this.selectedJob !== null;
    }


    get showApplyForm() {
        return this.selectedApplyJob !== null;
    }


    handleViewDetails(event) {

        const jobId = event.currentTarget.dataset.id;

        this.selectedJob = this.jobs.find(
            job => job.id === jobId
        );
    }


    handleCloseDetails() {
        this.selectedJob = null;
    }


    handleApply(event) {

        const jobId = event.currentTarget.dataset.id;

        this.selectedApplyJob = this.jobs.find(
            job => job.id === jobId
        );

        this.applicantName = '';
        this.applicantEmail = '';
        this.applicantPhone = '';
    }


    handleCloseApply() {
        this.selectedApplyJob = null;
    }


    handleInputChange(event) {

        const field = event.target.name;

        this[field] = event.target.value;
    }


    handleSubmitApplication() {

        if (
            !this.applicantName ||
            !this.applicantEmail ||
            !this.applicantPhone
        ) {

            this.showToast(
                'Missing Information',
                'Please fill in all required fields.',
                'error'
            );

            return;
        }


        submitApplication({
            jobId: this.selectedApplyJob.id,
            studentName: this.studentName
        })
        .then(result => {

            if (result.startsWith('CREATED:')) {

                const applicationName =
                    result.split(':')[1];

                this.showToast(
                    'Application Submitted',
                    'Application ' +
                    applicationName +
                    ' created successfully.',
                    'success'
                );

            }
            else if (result.startsWith('EXISTS:')) {

                const parts = result.split(':');

                const applicationName = parts[1];
                const status = parts[2];

                this.showToast(
                    'Application Already Exists',
                    applicationName +
                    ' already exists with status: ' +
                    status,
                    'info'
                );
            }

            this.selectedApplyJob = null;

            this.applicantName = '';
            this.applicantEmail = '';
            this.applicantPhone = '';
        })
        .catch(error => {

            console.error(error);

            let message = 'Unable to submit application.';

            if (error.body && error.body.message) {
                message = error.body.message;
            }

            this.showToast(
                'Application Failed',
                message,
                'error'
            );
        });
    }


    showToast(title, message, variant) {

        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
}
