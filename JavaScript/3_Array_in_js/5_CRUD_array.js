//crud operation in js


//===============================Adding the element ==============================================

///===================================Adding the element at the end of the array=======================
console.log("====================push =========================");
//push () method is used to adding the element at the end of the array
//these method return the new length of the array.
//we can push or add multiple element in the array in single go.
const animals=["pig","dog",'horse'];
console.log(animals);
var count=animals.push("cat","mouse");//it return the length of the new array after pushing the elements 
console.log(animals);

///===================================Adding the element at the start of the array=======================

console.log("================Unshift=========================");

//unshift method is used to add the element at the beginnig of the array 
//it also simmilar to the push we can add multiple element through this method
// and it also return the length of the array
const numbers=[1,23,45,67,8,9];
console.log(numbers.unshift(1,23,4));//in this case it return new length of the array

console.log(numbers);//display the updated array.

// =============================Removing the element from the array===================
console.log("Removing the element from the array==================");

const items=["cabage","carrot","tomato","mangoes",'apple'];
 
// pop is used to remove the elemets or items from  end of the array
//these method returns the last element which is removed from the array
//as affect the size of the array gets changed
console.log(items.pop());//apple is op
console.log(items.length);


//==================Remove the element from the beginning=================

//shift method is used to remove the element from start 
//it also returns the same element

console.log(items.shift());//cabage is op
console.log(items);
console.log(items.length);


