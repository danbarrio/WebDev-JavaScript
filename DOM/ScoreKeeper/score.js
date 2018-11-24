var p1button = document.querySelector("#p1");
// variation: getElementById
var p2button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var h1 = document.querySelector("h1");
var p1Score = 0;

p1button.addEventListener("click", function(){
	p1Score++;
	p1Display.textContent = p1Score;
});