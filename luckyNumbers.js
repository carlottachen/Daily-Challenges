
function rollDice(n){
	let possibleRolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let luckyRolls = [];
	for(i = 1; i <= n; i++){
		let randomNum = Math.floor(Math.random() * possibleRolls.length);
	//console.log(randomNum);
		luckyRolls.push(possibleRolls[randomNum]);
		possibleRolls.splice(randomNum, 1);
	}
	return luckyRolls;
}
console.log(rollDice(4));

