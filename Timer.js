// Set the date we're counting down to
var time = 16;

// Update the count down every 1 second
var x = setInterval(function() {
    time = time - 1; 
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = time + "s ";
    
    // If the count down is over, write some text 
    if (time < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);