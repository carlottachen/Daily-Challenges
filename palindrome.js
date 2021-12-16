
function palindrome(str){

	//put str into an array
	let str1 = str.split("");
	let str2 = [];
	//put str1 into another array backwards
	for(let i = str1.length - 1; i >= 0; i--){
		str2.push(str1[i]);
	}

//	console.log(str1);
//	console.log(str2);

	//compare every index using .every() in str1 and str2
	//then returns boolean
	return str1.every((e, i) => e === str2[i]);
	//e: the current element in str1
	//i: element in str2
	//(e,i) => e=== str2[i]; is an arrow function
}

console.log(palindrome('hello'));
console.log(palindrome('racecar'));

