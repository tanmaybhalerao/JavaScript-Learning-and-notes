//Searching and filters in array=============================
console.log("Searching and filters in the array=================");
var friends = ["akash", "vedant", "Akshay", "Dipak", "vedant"];
//indexOf() method in array js
//it finds the index number of the element 
//it returns index of first occurnece of that element and stop searching
//it takes 2 parameter in that 1 is optional 
//first one is element to be searched and second is from which index to be searched
// when 2 nd parameter is not given it start searching from 0
// its case sensitive + it search in forward direction only
//when no result gets mathed it returns -1
let op = friends.indexOf("Akshay");
console.log(op);


//with two parameter
friends.indexOf("akash", 1)//here op is -1 because it start serching for akash from index 1 not from 0 

//lastIndexOf()
//the difference between index and last index is that index of start searching in forward direction
//and last index start searching from the backward direction 

console.log(friends.lastIndexOf("vedant"));//op is 4

//When no thing matches it returns the -1 value

console.log(friends.lastIndexOf("vedanta"));//op is -1

//============================================================
//thers is 1 more method for searching that is includes it simmilar to indexOf() 
//the difference is that it returns boolean value either true or false


console.log(friends.includes("vedant"));//it return true here we are not concerend with index
//we just need to find out its present or not

//===========================find method !!! important-=======================
//find function returns only one element which satisfies the condition if not found returns undefined
var prices = [123, 345, 12, 567, 876, 674];
const findsmall = prices.find((element, idx) => {
    console.log("we entered in the find method which find the first element which satifies the condition");
    return element < 400;//it returns the first element which satifies the condition.
    //if the condition  fails  it returns undefined
});

findsmall;//here we storing the function in the variable and call it by that var name.
console.log(findsmall);


//findIndex() method is simmilar to the find method 
//the main difference is it find index instead of element value.


const findIdx = prices.findIndex((element, idx) => {
    return element>=100;//it return index value 2 because 12 is positioned at 2nd .
    //If the condition is failed then it returns -1.
 });

console.log(findIdx);