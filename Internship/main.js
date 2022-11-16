/*********************************************************************************/
/* Created by Taylor Harris for Software Development/Technical Writer Internship */
/* Last Modified: 11/2/2022                                                      */
/*********************************************************************************/

// COLLAPSIBLES
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// INNER COLLAPSIBLES
var acc = document.getElementsByClassName("inner-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/****************************************************************/

//POPUPS
// When the user clicks on <div>, open the popup
function popupone() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}

function popuptwo() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function popupthree() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

function popupfour() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}

function popupfive() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
}

function popupsix() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
}

function popupseven() {
    var popup = document.getElementById("myPopup7");
    popup.classList.toggle("show");
}

function popupeight() {
    var popup = document.getElementById("myPopup8");
    popup.classList.toggle("show");
}

function popupnine() {
    var popup = document.getElementById("myPopup9");
    popup.classList.toggle("show");
}

function popupten() {
    var popup = document.getElementById("myPopup10");
    popup.classList.toggle("show");
}

function popupeleven() {
    var popup = document.getElementById("myPopup11");
    popup.classList.toggle("show");
}

function popuptwelve() {
    var popup = document.getElementById("myPopup12");
    popup.classList.toggle("show");
}

function popupthirteen() {
    var popup = document.getElementById("myPopup13");
    popup.classList.toggle("show");
}

function popupfourteen() {
    var popup = document.getElementById("myPopup14");
    popup.classList.toggle("show");
}