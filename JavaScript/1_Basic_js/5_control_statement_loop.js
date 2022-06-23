//Control statement and loop
//if else
//switch statement 
//while loop
//do while
//for loop
// for in loop
// for of loop
// conditionla ternary

//if else syntax
{
    console.log("=======================IF ELSE statement=====================");
    var tommr="rain"
    if (tommr=="rain")
    {
        console.log("Raining tommorow");
    }
    else 
    {

        console.log("Not Raining ");
    }
}
//if ladder syntax
{
    console.log("=================if else ladder=====================");
    var a=1;
    var b=3;
    var c=2;
    if(a>b)
    {
        console.log("a is greater then b");
    }
    else if(b>c)
    {
        console.log("b is greater then c")
    }
}

//challenge
///find  the leap year  by using the if else statement 

//condition for the leap year
//if the number is divisible by 100 and 400 then its leap year
 //and then 2nd condition is it should by divisible by 4 but not by 100


{
    console.log("\n========================Leap year Question==============================\n");
    var year=2100;

    if(year%4==0 || year%400==0)
    {
        if(year%100==0)
        {
            console.log("its a not leap year");
        }
        else
        {

            console.log("its a leap year")
        }
    }
    else
    {
        console.log("its not a leap year");
    }

}



//What is truthy and falsy value in javascript 
//the value which are considered as false in js are called as falsy value .
//falsy is pronaunce as false in js
//there are 5 falsy values in js 
//NAN ,0, " ",undefined,null .

console.log("===========================================falsy and truthy value in js================");
var score;
if(score=0)
{
    console.log("We lose the game");
}
else
{
    console.log("we win the game")
}

//Any other value then null,ubdefined,'',0,NAN is considered as truthy value or true 

console.log("===========================================falsy and truthy value in js================");
var score;
if(score=5)
{
    console.log("We lose the game");
}
else
{
    console.log("we win the game");
}

console.log("these is the example of the truthy and falsy values");


//=========================================================
//What is ternamry operator ?
//only one js statement having 3 operands in the expression is the ternary operator
//Syntax:
//variableName=(condition)?value1:value2

//its the shorter version of the if else statement 
console.log("\n==============Ternary Operator===============\n");

var age=21;
console.log(age>=18?"you can vote":"you can't vote");

console.log("\nThese is the short hand of if else statement\n");

