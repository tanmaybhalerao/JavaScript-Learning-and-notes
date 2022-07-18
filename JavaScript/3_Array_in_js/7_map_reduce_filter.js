//map is method of array which is used to perform the action on each element of the array.
// and  return a  new array based on function result 

//map returns new array .

//Example find the odd numbers in the array
const arr1 = [12, 345, 67, 44, 87, 344, 890, 456];
const oddarr = arr1.map((Element, idx, array) => {
    return (Element%2==0)
});
console.log("orignal array " +arr1);
console.log("Array of odd numbers "+oddarr);//it returns the result of the array
//ie  true or false true,false,false,true,false,true,true,true


//Difference between map and filter
const oddarr12 = arr1.filter((Element, idx, array) => {
    return (Element%2==0)
});
console.log(oddarr12);
//this is the difference between filter and map method
//filter returns the values which satisfies the condition
//map returns the result of the condition


console.log("Map also used to iterate though the array");


//map is also used as loop the difference between foreach and map is that 
//map return the new array
//foreach return the undefined
//map method is chainable means u can attach sort,reduce and filter
//this is the main difference between foreach and map function

//chanllenge time
console.log("=====================challenge time========================");
//1.find the square root of the each element in the array
//2.multiply the each element by 2 and return only if the value is greater then 10
console.log("Solution 1: square root question");
var carr=[25,36,49,81,100,121];

const sqrtarr=carr.map((currElm)=>{
    return Math.sqrt(currElm);
});
console.log(carr +" orignal array");
console.log(sqrtarr+" sqrt root array");


console.log("Solution 2: ===============================");


const mularr=carr.map((currElm)=>{
    return currElm*2;
}).filter((Element)=>{
    return Element>200;
})

console.log(mularr);