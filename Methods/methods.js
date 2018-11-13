// In JavaScript, a Method is a Property which is a Function inside an object.
// Like all properties of an object, it can be called with dot notation (pass in any parameters).

var obj = {
	name: "Chuck",
	age: 51,
	friends: ["Joe", "Fred", "Mary"],	
	add: function(x,y){
		return x + y;
	}
}

// to call function: obj.add(4,2);


// You can add a new property and values for it using dot notation:

obj.favColors = ["Blue", "Green"];


// Using "this" keyword in a Method refers to the parent object it is in, 
// in this case serves as a replacement for comments.data.forEach...

var comments = {
	data: ["Great Job!", "Bye", "Uh-Huh"],
	print: function(){
		this.data.forEach(function(element){
		console.log(element);	
		});
	}
};

// to call the print function: comments.print()
