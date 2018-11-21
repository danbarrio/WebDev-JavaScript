var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// SETUP CLICK LISTENER
button.addEventListener("click", function() {
	paragraph.textContent = "Someone Clicked the Button!"
});

// Find all Li's in page and put them into an array: lis
var lis = document.querySelectorAll("li");

// Add an on Click EventListener to each li in array
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "red";
	});
}