//This in js
//The defination of "This " object is that it contain current context.
// this object is can have different values depending on where it is placed.


//write below line in browser console
console.log(this)//it returns the windows objects

// this object always returs the windows object untill and unless it placed inside the Object literals

// example 1:
let obj={
    name:"tom",
    age:34,
    data(){
        console.log(this);
    }
}

obj.data();
//here this referes to the obj context not the windows context.


//Note:===================================
//We cannot use this keyword in the fat arrow function ()=> 


let obj1={
    name:"tom",
    age:34,
    data:()=>{
        console.log(this);
    }
}

obj1.data();//
//It return windows object and we not get correct output in the function