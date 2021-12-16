//solution will only work for num up to 999
function toRoman(num) {
	//declare a new string
    let roman = ''
	//convert integer into a string
    let numString = String(num)

    const romanDigit = {
        1: 'I', 
        5: 'V', 
        10: 'X', 
        50: 'L', 
        100: 'C', 
        500: 'D'
    }

    if (numString.length === 4) {
        return 'M'
    }

    if (numString.length === 3) {
	    //get first digit of string
        let current = parseInt(numString[0])
        if (current >= 5) {
		//add on to string
            roman += romanDigit[500]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[100]
        }
        numString = numString.slice(-2)
    }

    if (numString.length === 2) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[50]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[10]
        }
        numString = numString.slice(-1)
    }

    if (numString.length === 1) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[5]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[1]
        }
    }

    return roman
}
console.log(toRoman(462));
