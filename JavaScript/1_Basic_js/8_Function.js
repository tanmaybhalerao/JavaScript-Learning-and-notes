console.log("======================Function in javascript====================");
//Function in js
//function in javascript is block of code which is designed to perform a particular task
//functiom defination is also known as function declaration or function statement


//function defination
//before we use a function , we need to define it.
//function is keyword  used for defining the function

//Syntax:
// function .....{//statement}


//Steps in function 
//1.defining the function
//2.calling the function

function total() {
    console.log("Calling the function total");
    var a = 10;
    var b = 11;
    console.log(a + b);
    return (-1);
}//<---- function defination

console.log(total());//<--- callling the function


//Function Argument and Function parameter
//Function parameter are the values which are listed in the function defination
//Function Argument are the real values passed to the function  while calling

{
    console.log("========================Difference between function pararmeter and argument========")
    var a = 20;
    var b = 12;


    function sum(x, y) //here x and y are functional parameters
    {
        return (x + y);
    }

    console.log(sum(a, b));//here we are calling the function with actual values or arguments


}

//================Function Expression in javascript=======================
console.log("=========================\n\n===============Function Expression=========");
//function expression simply means creating  the function and put it into the variable.
//Example 1:

{

    var x = 1, y = 2;
    function sum(a, b) {
        return (a + b);
    }

    var z = sum(x, y);//by storing the function in variable we can call it in much simpler way
    console.log(z);


}

//Exanmple :2
console.log("====================Example 2====================");
{
    function greet() {
        console.log("Hi Tanmay !");
    }
    var x = greet();
    x;//here we write x instead of using the entire greet() . we are calling the function easily.

}


//Anonymus function:
//A function which does't have any name is called annonymous function
//anonymus function has the same syntax as normal or named function in js


// Example 1:
{
    console.log("=================Anonymus function with example 1================");
    var factorial = function (num)//name of the function is no longer in existance
    {
        var fact=1;
        for (var i = 1; i <= num; i++) {
            fact=fact*i;
        }
        return fact;
    }

    //here we are directly passing the argument to the varialbe because function dont have name
    console.log(factorial(5));
    //instead of writing these kind we can again use function expression .
    var fc=factorial(10);
    
    console.log("factorial is:"+ fc);
}
