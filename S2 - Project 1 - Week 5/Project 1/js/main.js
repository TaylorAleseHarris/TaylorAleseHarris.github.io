/*********************************************************************
***
*Original Author: Taylor Harris *
*Date Created: 1/19/22 *
*Version: 1 *
*Date Last Modified: 2/3/22 *
*Modified by: Taylor Harris *
*Modification log:              *
1/19/22 - Created js.
1/21/22 - Created alert.
1/25/22 - Commented out alert. Created event listeners for Newsletter signup and Contact form.
***
******************************************************************** */
"use strict"

// alert("This site's leader may alarm you. Move forward at your own risk.");

/*--------------------*/
/* *** NEWSLETTER *** */
/*--------------------*/
// const $ = selector => document.querySelector(selector);

// document.addEventListener("DOMContentLoaded", () => {
    
//     $("#join").addEventListener("click", () => {
//         // get values user entered in textboxes
//         const news_firstName = $("#news_firstName").value;
//         const news_email1 = $("#news_email1").value;
//         const news_email2 = $("#news_email2").value;
    
//         // create an error message and set it to an empty string
//         let errorMessage = "";

//         // check user entries - add text to error message if invalid
//         if (news_firstName == "") {
//             errorMessage += "First name is required.\n";
//         }

//         if (news_email1 == "") { 
//             errorMessage += "Email is required.\n";
//         }
    
//         if (news_email2 == "") { 
//             errorMessage += "Confirm email is required.\n";
//         }
    
//         if (news_email1 != news_email2) { 
//             errorMessage += "Both emails must match.\n";
//         }
//         console.log(errorMessage);
    
//         // submit the form if error message is an empty string
//         if (errorMessage == "") {
//             //$("#join_newsletter").submit();
//             alert("Thank you for joining my newsletter!")
//         } else {
//             alert(errorMessage);            
//         }
//         $("#news_firstName").value = "";
//         $("#news_email1").value = "";
//         $("#news_email2").value = "";
//     }); 
//     $("#news_firstName").focus();
// });

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