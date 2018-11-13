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