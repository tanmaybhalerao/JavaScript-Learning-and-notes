//Time method in javascript
let currdate=new Date();
console.log("==================get method for setting the time========");
console.log(currdate);//gives current date and time
console.log(currdate.getTime());//this method return time in millisecond from 1 jan 1970
console.log(currdate.getHours());//return current hour(0-23)
console.log(currdate.getMinutes());//return current minute(0-59)
console.log(currdate.getSeconds());//return current seconds (0-59)


//Setting the time
//set method for time
console.log("==================Set method for setting the time========");
let curtime=new Date();
console.log("currtime before setting time"+curtime);
console.log(curtime.setHours(23));// return type is miliseconds
console.log(curtime.setMinutes(3));// return type is miliseconds
console.log(curtime.setSeconds(5));// return type is miliseconds
console.log(curtime.setMilliseconds(27));

console.log("currtime after  setting time" +curtime);


console.log("============some more methods for representation =======");

console.log(curtime.toLocaleTimeString());//Ii gives current time as o/p
console.log(curtime.toLocaleDateString())//It give current date as o/p
console.log(curtime.toLocaleString());//It gives current date and time as o/p