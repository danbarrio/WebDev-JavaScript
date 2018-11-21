var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", toggleOnClick);


// Version 1 - change propery directly

/*
function toggleOnClick(){

	if(isPurple){
		document.body.style.background = "white";
	} else {
		document.body.style.background = "purple";
	}
	// Toggles value of isPurple every time this function is run
	isPurple = !isPurple;
};

*/

// Version 2 - Toggle property via classList.toggle
// if body DOESN'T have the class named purple, add it. 
// If body DOES have a class named purple, remove it.

function toggleOnClick(){
	document.body.classList.toggle("purple");	
};