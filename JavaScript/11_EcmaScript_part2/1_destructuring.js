//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

//Array Destructuring 

let friends=["tanmay","vedant","ankit","dipak"];

//we can extract thes by traditional way like
let f1=friends[0];
let f2=friends[1];
let f3=friends[2];
let f4=friends[3];

console.log(`By traditional methods : ${f1 }  ${f2 }   ${f3 }  ${f4 }`);
//BY array destructring

let[F1,F2,F3,F4]=friends;
//here we are directly stroing the values of array into varialbe 
console.log(`By array destructuring   ${F1 }  ${F2 }   ${F3 }  ${F4 }`);

//element of array stored into the variable by index positions



//========================Object Destructuring 
mybiodata={
    fname:"tom",
    lname:"cruise",
    age:45
}

console.log(mybiodata);
//name insideobject and variable should be same for object destructuring.
let {fname,lname,age}=mybiodata;
console.log(`my name is ${fname1} ${lname} and my age is ${age}`);


//element of object stored into the varialbe by first to last.
