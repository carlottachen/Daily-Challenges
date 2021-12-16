
function findOutlier(array){
	let even = [];
	let odd = [];
	let evenNum = 0;
	let oddNum = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i] % 2 === 1){
			odd.push(array[i]);
			oddNum++;
		}
		else if(array[i] % 2 === 0){
			even.push(array[i]);
			evenNum++;
		}
	}
	if(oddNum > evenNum)
		return even + ' is the outlier';
	else
		return odd + ' is the outlier';
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([50, 55, 60, 70, 80]));

function outlier(array){
	let even = [];
	let odd = [];
	array.forEach(e => e % 2 === 0 ? even.push(e) : odd.push(e));
	return odd.length === 1 ? odd[0] : even[0];
}
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(outlier([50, 55, 60, 70, 80]));

