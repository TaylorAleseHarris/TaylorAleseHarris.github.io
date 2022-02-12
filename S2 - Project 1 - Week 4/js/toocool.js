/*------------------------*/
/* **** Slideshow V1 **** */
/*------------------------*/
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



/*------------------------*/
/* **** Slideshow V2 **** */
/*------------------------*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/*----------------------*/
/* **** Cycle Show **** */
/*----------------------*/
// $(document).ready( () => {

//     const slider = $("#image_list");      // slider = ul element

//     // the click event handler for the right button
//     $("#right_button").click( () => { 

//         // get value of current left property
//         const leftProperty = parseInt(slider.css("left"));
        
//         // determine new value of left property and
//         let newLeftProperty = 0;
//         if (leftProperty - 100 > -600) {  // these are ratios, and there's 6 images to display
//             newLeftProperty = leftProperty - 100;
//         }
        
//         // use the animate function to change the left property
//         slider.animate({left: newLeftProperty}, 700);    
//     }); 
    
//     // the click event handler for the left button
//     $("#left_button").click( () => {
    
//         // get value of current right property
//         const leftProperty = parseInt(slider.css("left"));
        
//         // determine new value of left property
//         let newLeftProperty = 0;
//         if (leftProperty < 0) {
//             newLeftProperty = leftProperty + 100;
//         }
//         else {
//             newLeftProperty = -500;
//         }
        
//         // use the animate function to change the left property
//         slider.animate({left: newLeftProperty}, 700);
//     });

// });