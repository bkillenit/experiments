$(document).ready(function(event) {

	$("#email-form").submit(function (event) {
		event.preventDefault();
		
		//gets the data from the email field
		var email = $('input[name=email]').val();

		//validates something was entered
		//TODO: change this to a email validator
		if ( email == '' ) {
            return false;
        }
        // alert(email);   

        //makes an AJAX request to *** sending the email form as data
        //didnt know what language you are going to use and where to place it 
        $.ajax({
            
            // Pass email data to *** through GET request
            url: "", 
            type: "GET",          
            data: email,        
            cache: false,
            
            success: function () {                
                // alert();             
            }        
        }); 

        //TODO: move these next two lines to the success of the AJAX call 
        //toggling css visibilty used instead of the jquery show/hide to have the form render in
        //place without being visible, fixes bug when field appears and it pushes the footer down 
        $('#password-form').css('visibility','visible');
        $('#password-form').hide();
		$("#password-form").fadeIn("slow");
		$('#contact-info').css('margin-top', 0);
		$('#mailer-confirm').css('visibility', 'visible');

	});

	$("#password-form").submit(function (event) {
		event.preventDefault();

		//gets the data from the email field
		var email = $('input[name=email]').val();
		var password = $('input[name=email]').val(); 

		//validates something was entered
		//TODO: change this to a email validator
		if ( email == '' ) {
            return false;
        } 
        //TODO: change this to a password validator
        if ( password == '' ) {
            return false;
        } 

        //combined email and password into a data object
        //didn't know what to do with this to avoid double submission of the email
        var data = {
        	email: email,
        	password: password
        }
        // alert(data.email + " " + data.password); 

		//makes an AJAX request to *** sending the email form as data
		//didnt know what language you are going to use and where to place it 
        $.ajax({
            
            // Pass email data to *** through GET request
            url: "", 
            type: "GET",          
            data: data,        
            cache: false,
            
            success: function () {                
                // alert();             
            }        
        }); 

	});

});