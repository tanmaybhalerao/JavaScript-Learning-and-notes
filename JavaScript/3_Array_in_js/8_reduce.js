//Reducere is the method to reduce the value into the single value
//for example:
//addition of all the element of the array
//all arithmetic operations ie multiplication and add
//by using reducer we simply reduce the array into single value

let arr = [1, 23, 4, 56, 7, 89, 023];

//it takes 4 parameters
//accumlator  is the value in the array at the begin.
//element 
//index
//array
//Accumultor is new thing which means collect together

let sum = arr.reduce((accumulator, currvalue, index, array) => { 
    console.log(accumulator+" "+currvalue);
    return accumulator +=currvalue;
});
console.log(sum);


//accumulator can be used as chaninable method
