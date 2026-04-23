(function($) {
    "use strict"; // Start of use strict
    var emailSubmitted = false;
    var email = '';
    $('#email-form').submit(function(event) {
        event.preventDefault();
        email = $('#email').val();
        if (!email || !email.match(/@/)) {
        alert('Please enter a valid email address.');
        return;
        }    
        $('#email-form').hide();
        $('#details-form').show();
        emailSubmitted = true;
        var formData = new FormData(this);
        formData.append('Email', email);
        const body = {
            form: Object.fromEntries(formData.entries()),
            subject: "New email signup to Rhizal"
        }
        $.ajax({
        url: 'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-8e8c4968-55c0-47b4-a2c2-0a18affc3f51/emailer/send',
        type: 'post',
        data: JSON.stringify(body),
        contentType: 'application/json',
        processData: false,
        });
        
    });
    $('#details-form form').submit(function(event) {
        event.preventDefault();
        if (!$('#description').val()) {
            alert('Please describe how you plan to use Rhizal.');
            return;
        }
        var formData = new FormData(this);
        formData.append('Email', email);
        const body = {
            form: Object.fromEntries(formData.entries()),
            subject: "Details submitted to Rhizal"
        }

        $.ajax({
            url: 'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-8e8c4968-55c0-47b4-a2c2-0a18affc3f51/emailer/send',
            type: 'post',
            data: JSON.stringify(body),
            contentType: 'application/json',
            processData: false,
        });
        $('#details-form').hide();
        $('#thanks').show();
    });

})(jQuery); // End of use strict
