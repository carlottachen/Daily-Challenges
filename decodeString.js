function decode(my_string){
	//MUST use Number() to set a string index to number variable
	let num = Number(my_string[0]);
	let newStr = "";
//	console.log(num);
	for(let i = 1; i < my_string.length; i++){
//		console.log(num);
//		console.log(temp);
		let newChar = String.fromCharCode(my_string[i].charCodeAt() + num);
		console.log(newChar);
		newStr += String.fromCharCode(newChar);
	}
	return newStr;

/*
	let decipher = Number(my_string[0]); //set decipher to first index in string
	let solution = "";
	for(let i = 1; i < my_string.length; i++){
		//strValue = the charCode at index plus decipher number
		let strValue = my_string[i].charCodeAt() + decipher;
		//add the code of strValue to solution
		solution += String.fromCharCode(strValue);
	}
	return solution;
*/
}

console.log(decode('2fcjjm'));
//shifts 2 letters, will result in 'hello'
