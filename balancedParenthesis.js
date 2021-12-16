
function checkParenthesis(string){
	let num1 = 0, num2 = 0;
	let bool = false;
	for(let i = 0; i < string.length; i++){
		if(string[i] === '(')
			num1++
		if(string[i] === ')')
			num2++;
	}
	if(num1 === num2){
		bool = true;
		return bool;
	}
	else
		return bool;
}
console.log(checkParenthesis("((There's a bonus open paren here..)"));
console.log(checkParenthesis("()"));
console.log(checkParenthesis("Hey...there are no parens here!"));


//this one takes in to account if a closing parenthesis comes
//before a matching open one
function checkParenthesis2(string){
	let num1 = 0;
	let bool = false;
	for(let i = 0; i < string.length; i++){
		if(string[i] === '(')
			num1++;
		if(string[i] === ')')
			num1--;
		if(num1 < 0)
			return false;
	}
	if(num1 === 0)
		return true;
	else
		return false;
}
console.log(checkParenthesis2("((There's a bonus open paren here..)"));
console.log(checkParenthesis2("()"));
console.log(checkParenthesis2("Hey...there are no parens here!"));
console.log(checkParenthesis2(")..("));

