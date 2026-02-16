// Check if JS file is linked
alert("JavaScript Connected Successfully!");

// Select elements
let button = document.getElementById("myButton");
let output = document.getElementById("output");

// Add click event
button.addEventListener("click", function () {
    output.innerHTML = "Button clicked! Output displayed.";
});
