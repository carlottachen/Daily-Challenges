
function sorter(str){
	let newArr = str.split('').sort();
	let newStr = newArr.reverse().join('');
	return newStr;
}
console.log(sorter('slmsllssmmmmmsl'));
