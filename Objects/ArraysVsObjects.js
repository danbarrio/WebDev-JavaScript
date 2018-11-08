// ARRAYS ////////////////////////

var dogs = ["Rusty", "Lucky", "Rex", "Bubba"];

// To get an item from an array, use its index number:  dogs[1]

// To add an item to the end of an array use push:  dogs.push("Rover")


// OBJECTS ////////////////////////

var dog = 
{
	name: "Rusty",
	breed: "Lab",
	age: 6
}

// To get info from and object, use either square brackets with property:  dog["name"]
// or dot notation:  dog.name

// To add a property in an object, use brackets:  dog["color"] = "Black" 
// or dot notation:  dog.color = black


// Nesting Arrays and Objects

var posts = 
[
	{
		title: "Cats are awesome",
		author: "John",
		comments: ["Right On!", "You are dumb"]
	},
	{
		title: "Cats suck",
		author: "Dick",
		comments: ["Dogs Rule!", "Your feet smell of poo!"]
	}
]

// To access items within posts:
// posts[0].title   asks for the title of the first post
// posts[1].comments[1]  asks for the second comment of the second post 