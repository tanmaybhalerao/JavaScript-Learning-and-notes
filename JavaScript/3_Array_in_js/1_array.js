//Generally Array is a collection of element of the same datatype
//but in javascript we can store differet type of values into the arrays

//Ways to create the array
//Array class  .arrays are the prototypes in the  js 

var friends = ["akash", "vedant", "Akshay", "Dipak"];
console.log(friends);
console.log(typeof (friends));//output is Object
var friends2 = new Array;//optional in js .js see [] and consider it as array 
console.log(friends2);//output is [] 


//====================================================================
//===============Length of the Array=========================
console.log("===============Length of the array==========");
//Length is the property of the array by this property we can  simply find the 
//length or the size of the array

var size = friends.length;//here length is property so no () brackets.
console.log(`size of the array friends is ${size}`);


console.log("==============Operations on the array==========");
//1 Traverasal of array
//2 searching and filter in an array
//3 how to sort and compare  an array
//4 crud in array
//5 map()  reduce () filter()


///traversing or navigationn in the array
//using loop for in and for of
console.log("Looping in the array==========");


//We can iterate throug the array  by 3 ways
//1 .. traditional loop for loop or while,do-while loop 
console.log("================Traditional method in for loop");
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

///===============for in and for of loop ========
//2.for in loop and for of loop in the array
//for in loop gives index number as output
//for of loop gives elements as th output

console.log("===for in loop in the array ===");
for (let element in friends) {
    console.log(element);//output will be index of the array
}


console.log("===for of loop in the array ===");
///================for of  loop
//We can also iterate through string by using the for of loop .o/p as single char
for (let element of friends) {
    console.log(element)//op will be the actual elemnts of the array not the index 
    //and that is the differenc between for in and for of loop
}

///forEach in the array
//for each function we are using the

friends.forEach(function (element, index, array) {
    console.log(element + " " + "index :" + index + "array:" + array);
});

//by modern fat arrow function
friends.forEach((element, index, array)=>{
    //here we are dealing with fat arrow function instead of the traditional function
    //the only drawback of fat arrow function is that we can not use "this" keyword  or fat arrow function  doesn't support
    //this keyword
    console.log(element + " " + "index :" + index + "array:" + array);
});

