//prompt("Connected!");

var movies = [
	{
		title: "In Bruges",
		hasWatched: true,
		rating: 4
	},
	{
		title: "Heat",
		hasWatched: false,
		rating: 4.5
	},
	{
		title: "2001",
		hasWatched: true,
		rating: 5
	}
]

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched "
	} else {
		result += "not seen "
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});