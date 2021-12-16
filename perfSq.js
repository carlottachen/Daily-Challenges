const perfectSquare = (num) => {
	let result = Math.sqrt(num);
	if(result % 1 != 0)
		return -1;
	else{
		result++;
		let nextSquare = Math.pow(result, 2);
		return nextSquare;
	}
}
console.log(perfectSquare(9));
console.log(perfectSquare(289));
console.log(perfectSquare(3000));

