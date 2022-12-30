//object in javascript
// here we are focusing only on objects and function only because  nowdays nobody use classes
//react also shifting to the function components 
//so focus more on functional side 
//combining data and function together is called objects.

//Object literal is simply combination of key and value pair.

//how to create the object

let bioData = {
    myName: "x",
    myAge: 24,
    getData() {
        console.log(`myName is ${bioData.myName} and my age is ${bioData.myAge} `);

    }
}

console.log(bioData);//we are getting the entire inforamation about the object literals
//{ myName: 'x', myAge: 24, getData: [Function: getData] }

//" . " operator is used to access the variable or fucntion inside the object 
//calling the function
console.log("-----------------//calling the function")

bioData.getData();


//object inside object as value

let superHero ={
    Name:{spiderman:"peter Parker"} ,
    job:"delivery boy",
    swing(){
        console.log("I am spiderman ");
    }

}

//In above example superhero is object and it contains another object "Name"

console.log(superHero);
//Accessing the object inside another object
console.log(superHero.Name);
//
superHero.swing();