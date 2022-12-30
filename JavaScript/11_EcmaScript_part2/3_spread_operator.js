//rest and spread operator
//rest operator is used to combine the values into group
//spread operator is used to ungroup the values.
//both uses the same symbols that is "..."

//Spread Operator
arr1 = ["red", "green", "yellow", "indigo", "orange"];
console.log(arr1);//[ 'red', 'green', 'yellow', 'indigo', 'orange' ]
console.log(...arr1);//spread is applied. o/p:red green yellow indigo orange


more_Color=["blue","purple",...arr1];
//in above example we are not adding the array in array we are adding the element in the array by using spread opertor
console.log(more_Color);//[   'blue',   'purple',    'red',    'green',    'yellow', 'indigo',    'orange' ]

//Rest operator
const rest_Use=(...color)=>{//here parameters are passed one by one by using rest operator
    console.log(color +" ");
}
console.log("Rest Operator is  used:");
rest_Use("yellow","white","black","brown"); 
