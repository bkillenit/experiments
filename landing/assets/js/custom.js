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
		$("#password-form").fadeIn("slow");
		$('#mailer-confirm').show();

	}); //end of email-form submit function

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

	}); //end of password-form submit function

});