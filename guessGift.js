var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessTheGift = (wishlist, presents) => {
/*	let returnNames = [];
	for(let i = 0; i < wishlist.length; i++){
		returnNames.push(wishlist[i].name);
	}
	let sorted = returnNames.sort();
	return sorted;

	let returnNames = [];
	presents.forEach(function(p){
		wishlist.forEach(function(w){
			if(p.size == w.size 
				&& p.clatters == w.clatters
				&& p.weight == w.weight && 
				returnNames.indexOf(w.name) == -1) 
				returnNames.push(w.name);
		});
	});
	return returnNames;
*/
	let returnNames = [];
	for(let i = 0; i < presents.length; i++){
		for(let j = 0; j < wishlist.length; j++){
			if(presents[i].size === wishlist[j].size &&
				presents[i].clatters === wishlist[j].clatters &&
				presents[i].weight === wishlist[j].weight)
				returnNames.push(wishlist[j].name);
		}
	}
	return returnNames;
}

console.log(guessTheGift(wishlist, presents));
