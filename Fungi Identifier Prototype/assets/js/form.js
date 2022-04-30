/*********************************************************************
**
#Original Author: Taylor Harris #
#Date Created: 4/24/22 #
#Version: 1 #
#Date Last Modified: 4/24/22 #
#Modified by: Taylor Harris #
#Modification log:              #
4/24/22 - Added js for contact form.
**
******************************************************************** */



// DONT FORGET THIS LINE OF CODE IN THE HTML
//<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script> 
//PUT IT BEFORE THE FORM JS

"use strict";


$(document).ready(() => {

    // handle click on Join List button
    $("#submit").click(evt => {
        let isValid = true;

        // checkbox validation
        // let checkedOptions = [];
        // checkedOptions = $(":checkbox:checked");
        // if (checkedOptions.length == 0) {
        //     $("#task3").next().text("Select at least one.");
        //     isValid = false;
        // } else {
        //     $("#task3").next().text("");
        // }


        // validate the name entry 
        const namePattern = /^[a-z ,.'-]+$/i;
        const name = $("#name").val().trim();

        if (name == "") {
            $("#name").next().text("Name is required.\n");
            isValid = false;
        }
        else if (!namePattern.test(name)) {
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
        else if (!emailPattern.test(email1)) {
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
        else if (!phonePattern.test(phone)) {
            $("#phone").next().text("Use ###-###-#### format");
            isValid = false;
        }
        else if (phone.length != 12) {
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
            $("#message").next().text("Message is required.");
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
    // $("#reset").click(() => {
    //     // clear text boxes
    //     $("#name").val("");
    //     $("#email_1").val("");
    //     $("#email_2").val("");
    //     $("#phone").val("");
    //     $("#message").val("");

    //     // reset span elements 
    //     $("#name").next().text("*");
    //     $("#email_1").next().text("*");
    //     $("#email_2").next().text("*");
    //     $("#phone").next().text("*");
    //     $("#message").next().text("*");
    // });
});


$(document).ready( () => {

    // handle click on Join List button
    $("#join").click( evt => {
        let isValid = true;
        let msg = "";


        // validate the name entry 
        const namePattern = /^[a-z ,.'-]+$/i;
        const news_firstName = $("#news_firstName").val().trim(); 

        if (news_firstName == "") {
            msg +="Name is required.\n";
            isValid = false;
        } 
        else if ( !namePattern.test(news_firstName) ) {
            msg +="Must be a valid name.\n";
            isValid = false;
        }
        else {
            $("#news_firstName").next().text("");
        }
        $("#news_firstName").val(news_firstName);


        // validate the first email address
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const news_email1= $("#news_email1").val().trim();

        if (news_email1 == "") { 
            msg +="Email is required.\n";
            isValid = false;
        } 
        else if ( !emailPattern.test(news_email1) ) {
            msg +="Must be a valid email address.\n";
            isValid = false;
        } 
        else {
            $("#news_email1").next().text("");
        }
        $("#news_email1").val(news_email1);


        // validate the second email address
        const news_email2 = $("#news_email2").val().trim();

        if (news_email2 == "") { 
            msg +="Confirm email is required.\n";
            isValid = false; 
        } 
        else if (news_email1 != news_email2) { 
            msg +="Both emails must match.\n";
            isValid = false;
        } 
        else {
            $("#news_email2").next().text("");
        }
        $("#news_email2").val(news_email2);
        

		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
           alert(msg);
		}

        if (isValid == true) {
            alert("You're signed up for the newsletter!");
         }
    });

    $("#join").click( evt => {
    // clear text boxes
    $("#news_firstName").val("");
    $("#news_email1").val("");
    $("#news_email2").val("");
    
    });

    // move focus to first text box
    $("#news_firstName").focus();
});