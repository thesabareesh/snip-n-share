/**
 * Created by SABAREESH on 06-Oct-16.
 */


//Listeners for left-mouse buttons
document.addEventListener("mousedown", function(event) {
    if (event.button == 0) {
       console.log("mouse down");
    }
}, true);
document.addEventListener("mouseup", function(event) {
    if (event.button == 0) {
            console.log("mouse up");
    }
}, true);
