const decodeThis = str => {
	let array = str.split('');
	let newArray = [];
	for(let i = 0; i < array.length; i++){
		let num = array[i];
		do{
			i++;
			num--;
		}while(num >= 0);
//		console.log(array[i]);
		newArray.push(array[i]);
	}
	let newStr = newArray.join('').toString();
	return newStr;
}
console.log(decodeThis('0h2xce5ngbrdy'));
console.log(decodeThis('3vdfn'));
console.log(decodeThis('0r'));
console.log(decodeThis('2bna0p1mp2osl0e')); 
console.log(decodeThis('0y4akjfe0s'));


//Print Digits Backwards//////////////////////

const printDigits = num => {
	let array = (''+num).split('');
	for(let i = array.length - 1; i >= 0; i--)
		console.log(array[i]);
}
printDigits(123456);
