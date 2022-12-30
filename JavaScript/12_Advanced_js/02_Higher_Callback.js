//Higher order function and callback function
//=============================================
//Higher Order function:Function which takes other function as argument or returns other function is called Higher order function


//Callback function:function inside another function as argument or as return is called callback function.


// Example:


function add(a,b){
    return (a+b);
}
function subs(a,b){
    return (a-b);
}
function mul(a,b){
    return (a*b);
}
function div(a,b){
    return (a/b);
}


// Higher order function
//Here Calculator is Higher order function which takes 3 parameters
//operator is parameter .

function Calculator(num1,num2,operator){
    return operator(num1,num2);//callback function -- function inside function
}

console.log(Calculator(12,11,add));//here we are passing the name of the function as third argument.These value is replaced by operator  ie..return add(num1,num2);
console.log(Calculator(12,11,subs));
console.log(Calculator(12,11,mul));
console.log(Calculator(12,11,div));

// In above example  
//Calculator is Higher order function because it takes and return 
// other function

// add ,sub,mul,div is callback function beacuse it gets called inside another function 
