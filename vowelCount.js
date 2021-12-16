
//best run efficiency
function vowelCount(str){
	const array = str.split("");
	let count = 0;
	console.log(`${str}`);
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'a' || array[i] === 'e'||
			array[i] === 'i' || array[i] === 'o' ||
			array[i] === 'u')
			count++;
	};
	return `The string consists of ${count} vowels`;
};
console.log(vowelCount('count these vowels in this string'));

function getCount(str){
	var vowelsCount = 0;

	//below are two arrays we're going to compare
	var inputLetters = str.split("");
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	//.forEach executes a provided function for
	//each array element
	vowels.forEach(function(vowel){
		inputLetters.forEach(function(inputLetter){
			//inputLetter and vowel (singulars)
			//is looking at individual indexes
			//of each array
			if(inputLetter === vowel){
				vowelsCount++;
			}
		});
	})
	return vowelsCount;
}
console.log(getCount('count these vowels'));




