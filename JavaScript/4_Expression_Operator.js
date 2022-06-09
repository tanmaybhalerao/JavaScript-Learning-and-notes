//3 Expression and Operators
//Assignment
//Arithmetic
//comparison
//logical
//String 
//ternary and conditionla opertor


//1.Assignment operator
//right hadn side value is assigned to left hand side variable
//== is used for the comparision if both are equal it gives true otherwise false
var x=10;
var y=10;
console.log("===============================assignment operator==================");
console.log("jai shree ram");
console.log(x==y);
console.log("Is x and y bothe are equal "+(x==y));

//2 Arithmetic operator
//Addition
//substraction
//multiplication
//division
//modulo
console.log("=====================Arithmetic operator==================");
var a=81;
var b=8;
console.log("Value of and b is: "+a+" "+b);
console.log("Addition: "+(a+b));
console.log("Substraction: "+(a-b));
console.log("Multiplication: "+(a*b));
console.log("Division : "+(a/b));
console.log("Modulo : "+(a%b));

//Increment and Decrement Operator 
console.log("================Increment and decrement operator================");
console.log("value of and  a and  b is :"+ a+" "+ b);
//prefix and postfix
// a=81 and b=8
console.log("prefix value: "+ a++);
console.log("postfix value: "+ ++a);

//same with substraction a-- and --a


//Comparions Operator == > < <= >= !=
console.log("=========Comparision operator=============");

console.log("value of  a  and b "  + a+ " "+ b);
console.log("Is a and b both are equla "+(a==b));
console.log("Is a and b both are not equla "+(a!=b));
console.log("Is a greater than b "+(a>b));
console.log("Is a smaller than b "+(a<b));
console.log("Is a greater then or equals to "+(a>=b));

//Logical Operators in js ====================================
console.log("=======================Logical operators============");
//Logical operators
// && AND
// || OR
// ! NOT
//based on boolean values
console.log(" true && true :  "+ (true && true ));
console.log("true || true :  "+ true || false );
console.log("! true : "+ (!true));

//String concatenation
//To concat two string we use + operator for concatenation in the string  

console.log("==================String Concatenation==============")
console.log("Hello "+"World");

console.log("Challenge 4 questions===================================");
///Challenge 4
console.log(3**3);//Exponential operator left side value is base  and right side is power
console.log(5+"Thapa");//o/p 5thapa
//Swap two number program
console.log("================swapping of the number with  varialble===========\n");
{
    var a=15;
    var b=20;
    console.log("value of a and b before swapping: "+ a +" "+ b);
    var temp;
    temp=a;
    a=b;
    b=temp;
    console.log("value of a and b after swapping: "+ a +" "+ b+"\n");
    
}
console.log("================swapping of the number without the variable===============\n")

{
    var a=10;
    var b=15;
    
    console.log("value of a and b before swapping: "+ a +" "+ b);
    a=b+a;
    b=a-b;
    a=a-b;
    
    console.log("value of a and b after swapping: "+ a +" "+ b);

}
//Interview Question 
//What is difference bwetween == and ===
// == check by value
//=== check by reference or type 
console.log("========================Interview Question difference between ===  and ==");
{
    var a=5
    var b='5';
    console.log("type of a is: " + typeof(a));
    console.log("type of b is: " + typeof(b));
    console.log((a==b)+" :a==b");//these is the difference between == and ===
    console.log((a===b)+" :a===b");
    console.log("jai shreee ram");
}
