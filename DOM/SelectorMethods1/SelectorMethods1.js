// Get an Element by ID
var tag1 = document.getElementById("highlight");

// Get multiple Elements by Class Name
var tags1 = document.getElementsByClassName("bolded");

// Get Elements by Tag Name
// returns all items found in a list, even if there is just one item (like "body")
var tags2 = document.getElementsByTagName("li");


// querySelector returns the first element that matches a given CSS-style selector
var tag2 = document.querySelector("#highlight");

// Only returns the first instance of item. In this case only returns the first li 
// with the class "bolded"
var tag3 = document.querySelector(".bolded");

// querySelectorAll returns a list of items that matches
var tags3 = document.querySelectorAll("h1");

// Using the Style property to manipulate an element's style
var tag4 = document.getElementById("highlight");

tag4.style.color = "blue";
tag4.style.border = "10px solid red";
tag4.style.fontSize = "70px";
tag4.style.background = "yellow";
tag4.style.marginTop = "200px";
