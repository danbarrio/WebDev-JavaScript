window.setTimeout(function() {

	var todos = ["Buy new Turtle"];

	var input = prompt("What would you like to do?");

	while (input !== "quit") {
		// handle input
		if (input === "list") {
			console.log(todos);
			// ask for new todo
		} else if (input === "new" ) {
			var newTodo = prompt("Enter new todo");
			// add to todos array
			todos.push(newTodo);
		}

		// ask again for new input
		var input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP");

}, 500);




