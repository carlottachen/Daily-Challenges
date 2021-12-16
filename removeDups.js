
const removeDuplicates = string => {
	const arr = string.split('');
	const set1 = new Set(arr);
	let string2 = Array.from(set1).join('');	
	console.log(string2);
}
removeDuplicates('helloeveryone');

//same as above
function makeUnique(string){
	let set1 = new Set(string.split(''));
	//... spread operator copies values from array, string, etc.
	return [...set1].join('');
}
console.log(makeUnique('helloeveryone'));
