// 1. Print all numbers between -10 and 19
// var count = -10;
// while (count < 20)
// {
// 	console.log(count);
// 	count++;
// }

// 2. Print all even numbers between 10 and 40
// var count = 10;
// while (count < 41)
// {
// 	console.log(count);
// 	count+=2;
// }

// 3. Print all odd numbers between 300 and 333
// var count = 300;
// while (count < 334)
// {
// 	count++;
// 	countModulo = count % 2;
// 	if (!(countModulo === 0)) {
// 		console.log(count);
// 	}
// }

//	4. Print all numbers divisable by 5 AND 3 between 5 and 50
var count = 5;
while (count < 51)
{
	countModulo3 = count % 3;
	countModulo5 = count % 5;
	if (countModulo3 === 0 && countModulo5 === 0) {
		console.log(count);
	}
	count++;
}
