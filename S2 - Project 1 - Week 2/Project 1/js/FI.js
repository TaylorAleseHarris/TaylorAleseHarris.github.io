/*********************************************************************
***
*Original Author: Taylor Harris *
*Date Created: 1/19/22 *
*Version: 1 *
*Date Last Modified: 1/27/22 *
*Modified by: Taylor Harris *
*Modification log:              *
1/19/22 - Created js.
1/21/22 - Created alert.
1/25/22 - Commented out alert. Created event listeners for Newsletter signup and Contact form.
1/26/22 - Created FAQs event listeners.
1/27/22 - Created image slideshow js. Upgraded Contact form.
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



/*-------------------*/
/* **** CONTACT **** */
/*-------------------*/
document.addEventListener("DOMContentLoaded", () => {
    
    $("#submit").addEventListener("click", () => {
        // get values user entered in textboxes
        const contact_name = $("#contact_name").value;
        const contact_email1 = $("#contact_email1").value;
        const contact_email2 = $("#contact_email2").value;
        const contact_phone = $("#contact_phone").value;
        const contact_message = $("#contact_message").value;
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (contact_name == "") {
            errorMessage += "First name is required.\n";
        }

        if (contact_email1 == "") { 
            errorMessage += "Email is required.\n";
        }
    
        if (contact_email2 == "") { 
            errorMessage += "Confirm email is required.\n";
        }
    
        if (contact_email1 != contact_email2) { 
            errorMessage += "Both emails must match.\n";
        }

        if (contact_phone == "") { 
            errorMessage += "Phone is required.\n";
        }

        if (contact_message == "") { 
            errorMessage += "Message is required.\n";
        }
        console.log(errorMessage);
    
        // submit the form if error message is an empty string
        if (errorMessage == "") {
            $("#contact_me").submit();
            alert("Thank you, I'll get back to you shortly!")
        } else {
            alert(errorMessage);            
        }
        $("#contact_name").value = "";
        $("#contact_email1").value = "";
        $("#contact_email2").value = "";
        $("#contact_phone").value = "";
        $("#contact_message").value = "";
    }); 
    $("#contact_name").focus();
});



/*----------------*/
/* **** FAQs **** */
/*----------------*/
const toggle = evt => {
    const h2Element = evt.currentTarget;                 // get the clicked h2 element
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div

    h2Element.classList.toggle("minus");
    divElement.classList.toggle("open");

    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs h2");
    
    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
});



/*---------------------------*/
/* **** Image Slideshow **** */
/*---------------------------*/
const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;

const mainImage = $("#main_image");   // the img element for the show
const caption = $("#caption");        // the h2 element for the caption

const runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
};
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");
    
    // process image links
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // attach start and pause event handlers
    $("#start").addEventListener("click", () => {
       runSlideShow();
       timer = setInterval(runSlideShow, 2000);
       $("#start").disabled = true;
       $("#pause").disabled = false;
    });
    $("#pause").addEventListener("click", () => {
       clearTimeout(timer);
       $("#start").disabled = false;
       $("#pause").disabled = true;
    });
});


/*-----------------------*/
/* **** Image Flips **** */
/*-----------------------*/
const flipCardContainer = document.querySelector(".flip-card-container");
      
flipCardContainer.addEventListener("click", function() {
        flipCardContainer.classList.toggle("flip");
});