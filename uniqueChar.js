

function hasUniqueChars(str){
	let array = str.split("");
	let outcome = true;
	console.log(array);
	for(i = 0; i < array.length; i++){
		for(j = 0; j < array.length; j++){
			if(i !== j){
				if(array[i] === array[j]){
			//		console.log(array[i], array[j]);
					outcome = false;
					return outcome;
				}
			}
		}
	}
	return outcome;
}
console.log(hasUniqueChars('uniq'));
console.log(hasUniqueChars('repeating'));

function checkUnique(str){
	let uniqueChars = new Set([]);
	for(let i = 0; i < str.length; i++){
		uniqueChars.add(str[i]);
	}
	return uniqueChars.size === str.length;
}
console.log(checkUnique('uniq'));
console.log(checkUnique('repeating'));


/* sets do not allow repeating values
*/
