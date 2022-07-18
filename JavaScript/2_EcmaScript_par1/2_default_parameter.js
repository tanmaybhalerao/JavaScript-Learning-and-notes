console.log("==================Default parameter in function defination============");
//default parameter in the funcation defination 
//we can passed default values in the function defination if user dont pass any value
//without any  error default paramter gets filled in that variable

function total(a = 10, b = 1) {
    return(a+b);//here if user dont any value while calling the function we get op as 11.

}

console.log(" default parameters: no arguments while calling the function" +total());//here we are not passing any values while calling the function
console.log("============condition 2 ========");
console.log(total(123,2));//here we passing the arguments