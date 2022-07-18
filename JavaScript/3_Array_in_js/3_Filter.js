//Filter in the arrays
//we can say that filter method is extension  or advancement of find 
//while find only returns  one element only

//filter returns the new array list when it satifies the condition
//if the condition false on each and every element it returns the empty array

const price = [123, 345, 5654, 697, 345];
var  less_500 = price.filter((element,idx)=>{
    return element > 500;
});
//all element satifies the condition are stored in
console.log(less_500);

console.log("Filter method return the new array");
