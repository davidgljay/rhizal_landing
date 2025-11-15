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
        $.ajax({
        url: 'https://hooks.zapier.com/hooks/catch/14500435/u326m5w/',
        type: 'post',
        data: formData,
        contentType: false,
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

        $.ajax({
            url: 'https://hooks.zapier.com/hooks/catch/14500435/u326m5w/',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
        });
        $('#details-form').hide();
        $('#thanks').show();
    });

})(jQuery); // End of use strict
