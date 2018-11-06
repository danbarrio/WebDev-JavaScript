// 1. Print out the Array elements in reverse order //////////////////////

// My Solution:
var array1 = [1,2,3,4];

printReverse(array1);

function printReverse(item)
	{
		//console.log(item.length);

		for(var i = item.length; i > -1; i--)
		{
			console.log(item[i]); 
		}

	}

// Course Solution:


// 2. Check if all items in the array are the same. Print True or False //////////////////////

var array2 = [1,1,1,1]
var array3 = [2,1,1,1]
var array4 = ["a","b","p"]
var array5 = ["b","b","b"]
