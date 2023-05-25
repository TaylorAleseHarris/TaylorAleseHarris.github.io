/************************************************************/
/* Created by Taylor Harris for Technical Writer Internship */
/* Last Modified: 1/3/2023                                  */
/************************************************************/

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