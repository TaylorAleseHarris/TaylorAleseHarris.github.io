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


const $ = selector => document.querySelector(selector);

/*--------------------*/
/* *** NEWSLETTER *** */
/*--------------------*/
document.addEventListener("DOMContentLoaded", () => {
    
    $("#join").addEventListener("click", () => {
        // get values user entered in textboxes
        const news_firstName = $("#news_firstName").value;
        const news_email1 = $("#news_email1").value;
        const news_email2 = $("#news_email2").value;
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (news_firstName == "") {
            errorMessage += "First name is required.\n";
        }

        if (news_email1 == "") { 
            errorMessage += "Email is required.\n";
        }
    
        if (news_email2 == "") { 
            errorMessage += "Confirm email is required.\n";
        }
    
        if (news_email1 != news_email2) { 
            errorMessage += "Both emails must match.\n";
        }
        console.log(errorMessage);
    
        // submit the form if error message is an empty string
        if (errorMessage == "") {
            //$("#join_newsletter").submit();
            alert("Thank you for joining my newsletter!")
        } else {
            alert(errorMessage);            
        }
        $("#news_firstName").value = "";
        $("#news_email1").value = "";
        $("#news_email2").value = "";
    }); 
    $("#news_firstName").focus();
});



/*-----------------------*/
/* **** Image Flips **** */
/*-----------------------*/
// const flipCardContainer = document.querySelector(".flip-card-container");
      
// flipCardContainer.addEventListener("click", function() {
//         flipCardContainer.classList.toggle("flip");
// });