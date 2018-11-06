// 1. Print out the Array elements in reverse order //////////////////////

function printReverse(arr)
{
	for(var i = arr.length-1; i >= 0; i--)
	{
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);


// 2. Check if all items in the array are the same. Print True or False //////////////////////

function isUniform(arr)
{
	// The first item in the Array	
	var first = arr[0];

	// run through the Array, starting at index 1
	for(var i = 1; i < arr.length; i++)
	{
		// Compare every index starting at 1 to var first;
		if(arr[i] !== first)
		{
			return false;
		}
	}
	return true;
}

// run in console:   isUniform([1,1,1,1])
