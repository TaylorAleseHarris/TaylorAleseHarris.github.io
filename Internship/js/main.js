/************************************************************/
/* Created by Taylor Harris for Technical Writer Internship */
/* Last Modified: 1/3/2023                                  */
/************************************************************/

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

// ACCORDION SLIDE

$(document).ready(() =>
    $(".accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true,
        active: false
    })
)

// DEFINITIONS

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1){

         w3AddClass(x[i], "show");}
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


    // filterSelection("all")
    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    $("#myBtnContainer").find(".btn").removeClass("active1");
    $(this).addClass("active1");
    // this.className += "active";
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            $("#myBtnContainer").find(".btn").removeClass("active1");
            $(this).addClass("active1");
        });
    }