// update the text "Number of times button clicked: 0" every time the button on your webpage is clicked. (The text should update to show the correct count of clicks.)
// Hint: You will need to use the .innerHTML property of the element you want to update.


// get the button element, and store it in a variable
var button1 = document.getElementById("button");

// get the element that displays the number of clicks, and store it in a variable
var clicks = document.getElementById("clicks");

// set the initial number of clicks to 0
var count = 0;

// add an event listener to the button element
button1.addEventListener("click", function() {
    // increment the number of clicks
    count++;
    // update the text of the element that displays the number of clicks
    clicks.innerHTML = "Number of times button clicked: " + count;
    });
