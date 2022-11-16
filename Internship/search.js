/*********************************************************************************/
/* Created by Taylor Harris for Software Development/Technical Writer Internship */
/* Last Modified: 11/15/2022                                                      */
/*********************************************************************************/

function search_definitions() {
    let input = document.getElementById('searchbar').value
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