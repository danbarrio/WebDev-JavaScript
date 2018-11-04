// setTimeout allows HTML text to populate in Browser before popping up Prompt
window.setTimeout(function() {

	var todos = ["Buy new Turtle"];

	var input = prompt("What would you like to do?");

	while (input !== "quit"){
		// handle input
		if (input === "list") {
			listTodos();
		} else if (input === "new" ){
			addTodo();
		} else if (input === "delete"){
			deleteTodo();
		}
		// ask again for new input
		var input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP");

	function listTodos(){
		console.log("**********");
		
		// go through array and get each item and its index number
		todos.forEach(function(item, i){
			// print index number of each item in array and item string
			console.log(i + ": " + item);
		});
		console.log("**********");
	}

	function addTodo(){
		// ask for new todo
		var newTodo = prompt("Enter new todo");
		
		// add to todos array
		todos.push(newTodo);
		console.log("Added Todo");
	}

	function deleteTodo(){
		// ask for index of item to be deleted
		var index = prompt("Enter the index of item to delete");

		// splice() removes the given index # from array and 1 is how many items to delete
		todos.splice(index,1);
		console.log("Deleted Item");
	}

}, 500);




