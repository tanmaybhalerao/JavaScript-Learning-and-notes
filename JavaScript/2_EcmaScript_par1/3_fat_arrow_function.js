//difference between fat arrow function and traditional function
//traditional functional declare anywhere in the function
//in simple words  we can call function before we define it 
//js is interpreter language

function total()//traditional function in  js
{
    var a=10,b=11;
    console.log("method from the traditional function");
    return(a+b);
}


//Fat arrow function 
const total1 =()=>{
    
    console.log("method from the fat arrow  function");
    var a=10,b=11;
    return(a+b);
}

  console.log(  total1());//arrow function call
  console.log(  total());//traditionals function call

console.log("===============second example============");

//traditional method 
function add(a,b){
    console.log("method from traditional function");
    console.log( a+b);
}
//fat arrow function
const add_by_arrow=(x,y)=>{
    console.log("method from fat arrow function");
    console.log( x+y);
}
add(1,2);
add_by_arrow(22,11);


//One line code can be written directly without using return keyword.
const greet =()=>
    `hi folks `;

console.log(greet());