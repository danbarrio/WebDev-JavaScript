var age = prompt("What is your age?");
console.log(age);

if (age < 0) {
	console.log("ERROR: Age is negative!");
}

else if (age === 21) {
	console.log("Happy 21st birthday!!");
}

else {
	var oddChecker = age % 2;
	console.log(oddChecker);

	if (!(oddChecker === 0)){
		console.log("Your age is odd");
	}
}