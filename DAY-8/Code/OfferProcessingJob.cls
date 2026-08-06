public class OfferProcessingJob implements Queueable {

    private Id applicationId;

    public OfferProcessingJob(Id applicationId) {
        this.applicationId = applicationId;
    }

    public void execute(QueueableContext context) {

        System.debug('Queueable Job Running for Application: ' + applicationId);

        // Background processing logic can be added here
    }
}
