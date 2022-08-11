//Math object is used to perform all the mathematical operations
console.log(Math.PI)

//round function is used to roundoff to the nearest integer value
console.log("===========Round of function========")
console.log(Math.round(6.5))//round the value to the nearest integer

//Math.pow(x,y)
console.log("=============Math.pow function=======");
//x reprent base and y represent power 
//example 2 raise to 4 ie 2 is base and 4 is power
console.log(Math.pow(2,4))//it gives o/p as 16


console.log("=============Math.sqrt function=======");
//method is used to find the sqrt of the given number
// it takes only one parameter 
console.log(Math.sqrt(25));//o/p is 5


//Math.abs for absolute values
//it simply turn negative to positive value
console.log("============Math.abs==================")
console.log(Math.abs(-6789.8765));//6789.8765

//ceil and floor method
// ceil means higher 
//floor means lower

console.log("=====================ceil and floor values");
let val=5.368;
console.log("the actula value "+val);
console.log("value by ceil function "+(Math.ceil(val)));
console.log("value by floor function " +(Math.floor(val)));



//Random function  gives number betweeen  0 to 1(excluding)
//it always return value between 0 to 0.999999 in random way
console.log("===========Random function===============")
console.log(Math.round(Math.random()*10));//op is always between 0 to 10


//trunc method always return integer part of the number
//example  67.790   67 is integer and 790 is decimal part 
  console.log("=============Trunc function=================");
console.log(`actual value ${val}`);
console.log(`value after applying trunc function ${Math.trunc(val)}`);