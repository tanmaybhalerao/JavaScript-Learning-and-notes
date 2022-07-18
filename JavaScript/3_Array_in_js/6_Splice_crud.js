//splice method is used perform all types of crud operations in the array
//Add or remove  element from the array
//It returns the array of elements  that are deleted from the orignal array  
//it takes 3 parameter as argument
//start index ,delete count,String to be added (optional)
const person = ['india', 'australia', 'westindies', 'nepal', 'china'];
console.log(person);
//Add one element at the end of the array by using the splice method

const newperson = person.splice(person.length, 0, "french");
console.log(person)//after updating the array the new element get added

console.log(newperson);//here we are getting empty array because the no element gets deleted


//Adding the element at the given position
//place UK after the australia
console.log("//Adding the element at the given position//place UK after the australia")
person.splice(2, 0, "UK");
console.log(person);//

//Removing the last element from the array
console.log("//Removing the last element from the array");
person.splice(person.length-1, 1);//here we are removing the last element
console.log(person);

//Update method 
console.log("Updating the nepal by UK");
console.log(person);
console.log("length before update " + person.length);
person.splice((person.length - 2), 1, "US");

console.log("length after update " + person.length);
console.log(person);


//delete the element by index
console.log("Delete by Index number");
const deleteByIdx = person.indexOf("westindies");
if (deleteByIdx != -1) {
    person.splice(deleteByIdx,1);
    console.log("Deleted successfully");
    console.log(person);
}



