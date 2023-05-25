/************************************************************/
/* Created by Taylor Harris for Technical Writer Internship */
/* Last Modified: 3/2/2023                                  */
/************************************************************/

/* SEARCH DEFINITIONS */
function search_definitions() {
    let input = document.getElementById('termssearchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('filterDiv');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}

/* Another function using jquery */
/* SEARCH TRAINING LINKS */
$(document).ready(function(){
    $("#linkssearchbar").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".sidebar li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


/* SLIDESHOW */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("w3-orange", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-orange";
}