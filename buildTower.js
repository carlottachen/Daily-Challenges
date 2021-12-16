
function buildTower(rows){
	let tower = [];
	let star = "*";
	let space = " ";
	for(let i = rows; i > 0; i--){
		tower.push(space.repeat(i - 1) + 
			star.repeat(rows - i) + star +  
			star.repeat(rows - i) + 
			space.repeat(i - 1));
	}
	for(let i = 0; i < rows; ++i){
		console.log(tower[i])
	}
}
console.log(buildTower(4));
