/*using Javascript, print the smallest
  and largest numbers in the array*/

const array1 = [1, 4, 11, 2, 37, -4];

//sort array by ascending order
array1.sort(function(min, max){return min-max});

//console.log(array1);

//first item in array is smallest, print it
console.log(array1[0]);
//console.log(array1.length);

//loop to last item in array and print
for(var i = 0; i < array1.length + 1; i++){
    if(i === array1.length){
	console.log(array1[i - 1]);
    }
}

/* Instructor's solution to this code */

//Starting the array
let array = [23, 43, -12, 30, 4, 0, -36];
//start at the beginning of the array
//these will hold the smallest/largest numbers
let smallest = array[0];
let largest = array[0];
//loop through array, if array[i] is smaller
//or larger, then replace variable to be displayed
for(let i = 0; i < array.length; i++){
	if(smallest > array[i]){
		smallest = array[i];
	}else if(largest < array[i]){
		largest = array[i];
	}
}
//display variables
console.log(smallest, largest);
