// 1. Print all numbers between -10 and 19

// for (var i = -10; i <20; i++ ){
// 	console.log(i);
// }


// 2. Print all even numbers between 10 and 40

// for (var i = 10; i <41; i++ ){

// 	var countMod = i % 2;

// 	if (countMod ===0){
// 		console.log(i);
// 	}
// }

// 3. Print all odd numbers between 300 and 333

// for (var i = 300; i <334; i++ ){

// 	var countMod = i % 2;

// 	if (countMod !==0){
// 		console.log(i);
// 	}
// }

// 4. Print all numbers divisable by 5 AND 3 between 5 and 50

for (var i = 5; i < 51; i++ ){

	var countMod3 = i % 3;
	var countMod5 = i % 5;

	if (countMod3 === 0 && countMod5 === 0){
		console.log(i);
	}
}