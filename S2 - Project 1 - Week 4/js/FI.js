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



/*-----------------------------------------*/
/* **** Too Cool To Be True Slideshow **** */
/*-----------------------------------------*/
// const imageCache = [];
// let imageCounter = 0;
// let timer = null;
// let image = null;

// const mainImage = $("#main_image");   // the img element for the show
// const caption = $("#caption");        // the h2 element for the caption

// const runSlideShow = function() {
//     imageCounter = (imageCounter + 1) % imageCache.length;
//     image = imageCache[imageCounter];
//     mainImage.src = image.src;
//     mainImage.alt = image.alt;
//     caption.textContent = image.alt;
// };
         
// document.addEventListener("DOMContentLoaded", () => {
//     const links = $("#image_list").querySelectorAll("a");
    
//     // process image links
//     for ( let link of links ) {
//         // Preload image and copy title properties
//         image = new Image();
//         image.src = link.href;
//         image.alt = link.title;

//         // add image to array 
//         imageCache[imageCache.length] = image;
//     }

//     // attach start and pause event handlers
//     $("#start").addEventListener("click", () => {
//        runSlideShow();
//        timer = setInterval(runSlideShow, 2000);
//        $("#start").disabled = true;
//        $("#pause").disabled = false;
//     });
//     $("#pause").addEventListener("click", () => {
//        clearTimeout(timer);
//        $("#start").disabled = false;
//        $("#pause").disabled = true;
//     });
// });

/*----------------------------------------*/
/* **** Too Cool To Be True Carousel **** */
/*----------------------------------------*/
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property and
        let newLeftProperty = 0;
        if (leftProperty - 100 > -600) {  // these are ratios, and there's 6 images to display
            newLeftProperty = leftProperty - 100;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 700);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current right property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        }
        else {
            newLeftProperty = -500;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 700);
    });

});


/*-----------------------*/
/* **** Image Flips **** */
/*-----------------------*/
const flipCardContainer = document.querySelector(".flip-card-container");
      
flipCardContainer.addEventListener("click", function() {
        flipCardContainer.classList.toggle("flip");
});