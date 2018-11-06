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
	var first = arr[0];

	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i] !== first)
		{
			return false;
		}
	}
	return true;
}

// run in console:   isUniform([1,1,1,1])


// 3. Return the sum of all the numbers in the array //////////////////////////////

function sumArray(arr)
{
	var total = 0;

	arr.forEach(function(element)
	{
		total+= element;
	});
	return total;
}

// run in console:   sumArray([1,2,3])


// 4. Write a function that takes an array of numbers and returns the highest one ///////////////

function max(arr)
{
	var max = arr[0];

	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i] > max)
		{
			max = arr[i];
		}
	}
	return max;
}

// run in console:   max([1,8,3])