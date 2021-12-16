
const multiply = (numArr) => {
	let sortedArr = [];
	for(i = 0; i < numArr.length; i++){
		let productNum = numArr[i] * (i + 1);
		sortedArr.push(productNum);
	}
	sortedArr.sort(function(a, b) {return a - b;});
	return sortedArr;
}

console.log(multiply([23, 2, 3, 4, 5]));

