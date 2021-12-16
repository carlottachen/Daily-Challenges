
function growth(p0, percentGrowth, addInhab, surpass){
	percentGrowth = (percentGrowth/100) + 1;
	let years = 0;
	while(p0 < surpass){
		p0 = (p0 * percentGrowth) + addInhab;
		years++;
	}
	return years;
}
console.log(growth(1000, 2, 50, 1200));
console.log(growth(1500, 5, 100, 5000));
console.log(growth(1500000, 2.5, 10000, 2000000));
