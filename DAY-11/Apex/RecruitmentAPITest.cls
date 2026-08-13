public class RecruitmentAPITest {

    public static void testCallout() {

        HttpRequest request = new HttpRequest();

       request.setEndpoint('callout:Recruitment_API/get');
        request.setMethod('GET');
        request.setTimeout(120000);

        Http http = new Http();

        try {
            HttpResponse response = http.send(request);

            System.debug('STATUS: ' + response.getStatusCode());
            System.debug('BODY: ' + response.getBody());

        } catch (Exception e) {
            System.debug('ERROR: ' + e.getMessage());
        }
    }
}
