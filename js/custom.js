(function($) {
    "use strict"; // Start of use strict

	const path = window.location.pathname;
    const link = document.querySelector( `.navbar-default li a[href="${path}"]` );

    $(link).addClass('active');

    $('#organizingForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://hook.us1.make.com/fq8rntt8lxkg80m6omalzlcwmu6o1bpo',
            type: 'post',
            data:$('#organizingForm').serialize(),
            success:function(){
                $('#organizingArea').hide()
                $('#organizingThanks').show()
                console.log('success')
            }
        });
    });

})(jQuery); // End of use strict
