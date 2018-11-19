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

/*
tag1.style.color = "blue";
tag1.style.border = "10px solid red";
tag1.style.fontSize = "70px";
tag1.style.background = "yellow";
tag1.style.marginTop = "200px";
*/

// Instead of above, better to seperate concerns by using classList to change properties:
// ADD a class to the selected element
tag1.classList.add("exampleClass");

// REMOVE a class
// tag1.classList.remove("exampleClass");

// TOGGLE a class
// tag1.classList.toggle("exampleClass");

