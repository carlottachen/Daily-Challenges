
function phoneNumber(array){
	let phNum = [];
	phNum.push('(');
	if(array.length != 10){
		console.log('Phone number must contain 10 digits');
	}
	for(let i = 0; i < 3; i++){
		phNum.push(array[i]);
	}
	phNum.push(')', ' ');
	for(let j = 3; j < 6; j++){
		phNum.push(array[j]);
	}
	phNum.push('-');
	for(let k = 6; k < array.length; k++){
		phNum.push(array[k]);
	}
	let newNumber = phNum.join('');
	return newNumber;
}
console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhone(array){
	var format = '(xxx) xxx-xxxx';
	for(let i = 0; i < array.length; i++){
		format = format.replace('x', array[i]);
	}
	return format;
}
console.log(createPhone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
