document.addEventListener("DOMContentLoaded", function() {
    // get the button element, and store it in a variable
let button = document.querySelector("#mybutton");

// get the element that displays the number of clicks, and store it in a variable
let clicks = document.querySelector("#clicks");

// set the initial number of clicks to 0
let count = 0;

// add an event listener to the button element
button.addEventListener("click", function() { 
    // increment the number of clicks
    count++;
    // update the text of the element that displays the number of clicks
    clicks.innerHTML = "Number of times button clicked: " + count;
    });
    });
    
    


