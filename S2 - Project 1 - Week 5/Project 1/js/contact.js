/*********************************************************************
***
*Original Author: Taylor Harris *
*Date Created: 1/19/22 *
*Version: 1 *
*Date Last Modified: 2/3/22 *
*Modified by: Taylor Harris *
*Modification log:              *
1/26/22 - Created js. Created Contact form event listeners.
***
******************************************************************** */

"use strict";
$(document).ready( () => {

    // handle click on Join List button
    $("#submit").click( evt => {
        let isValid = true;


        // validate the name entry 
        const namePattern = /^[a-z ,.'-]+$/i;
        const name = $("#name").val().trim(); 

        if (name == "") {
            $("#name").next().text("Name is required.\n");
            isValid = false;
        } 
        else if ( !namePattern.test(name) ) {
            $("#name").next().text("Must be a valid name.");
            isValid = false;
        }
        else {
            $("#name").next().text("");
        }
        $("#name").val(name);


        // validate the first email address
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();

        if (email1 == "") { 
            $("#email_1").next().text("Email is required.");
            isValid = false;
        } 
        else if ( !emailPattern.test(email1) ) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } 
        else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email1);


        // validate the second email address
        const email2 = $("#email_2").val().trim();

        if (email2 == "") { 
            $("#email_2").next().text("Confirm email is required.");
            isValid = false; 
        } 
        else if (email1 != email2) { 
            $("#email_2").next().text("Both emails must match.");
            isValid = false;
        } 
        else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        


        // validate the phone entry
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
		const phone = $("#phone").val().trim();

		if (phone == "") {
			$("#phone").next().text("Phone is required.");
			isValid = false;
		} 
        else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Use ###-###-#### format");
            isValid = false;
        }
        else if ( phone.length != 12 ) {
			$("#phone").next().text("Use ###-###-#### format");
			isValid = false;
		} 
        else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);

        

        // validate the message entry 
        const message = $("#message").val().trim(); 

        if (message == "") {
            isValid = false;
        } 
        else {
            $("#message").next().text("");
        }
            $("#message").val(message);
			

						
		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
           evt.preventDefault();
		}

        if (isValid == true) {
            alert("Thank you, I'll get back to you shortly!");
         }
    });

    // handle click on Reset Form button
    $("#reset").click( () => {
        // clear text boxes
        $("#name").val("");
        $("#email_1").val("");
        $("#email_2").val("");
        $("#phone").val("");
        $("#message").val("");

        // reset span elements 
        $("#name").next().text("*");
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#phone").next().text("*");
        $("#message").next().text("*");
        
        $("name").focus();
    });
    // move focus to first text box
    $("#name").focus();
});