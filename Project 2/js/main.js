/*********************************************************************
***
*Original Author: Taylor Harris *
*Date Created: 2/22/22 *
*Version: 1 *
*Date Last Modified: 2/22/22 *
*Modified by: Taylor Harris *
*Modification log:              *
1/26/22 - Created js. Added nav bar function.
***
******************************************************************** */
"use strict";


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function nav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}