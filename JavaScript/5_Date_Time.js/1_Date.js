// Date object represent  instance of time
// it platform independent
// it started from 1st january 1970
//Date object contains a number that represent millisecond since 1 Jan 1970 UTC

//We can create the date object by  using 4 ways
new Date();

//2nd way  it takes 7 argument (not more then that but we give less then that )
//new Date(year,month,day,hour,minute,seconds,milliseconds);

//3 rd way
//new Date(milliseconds);
//4th way

//new Date(date String)//we cannot avoid month section

//Creating the date by constructor
let currdate=new Date();//new date always by default it gives current date and time
console.log(currdate);//In node console it gives different time ie.022-07-26T04:52:15.747Z
//If u copy this code in  browser console  then you get india time
//India is 5 hour 30 minutes of greenwich mean time.(GMT)
//If we want browser time in node then use tostring method
console.log(currdate.toString());//  Tue Jul 26 2022 10:30:35 GMT+0530 (India Standard Time)


//toLocalString method to give date in format of  mm/dd/yyyy hh/minute/sec am/pm
console.log("Local string method 😎 ===============");
console.log(currdate.toLocaleString());
console.log(currdate.getDate());//it returns the date part


 //Date.now()
 //This method is rarely used it returns the number 
 // miliseconds from 1st Jan 1970
 
 console.log("Date.now() method=======");
 console.log(Date.now());


 //Date 7 parameters
 //year month day hour minute sec millisec
//Note in js 0 to 11 are months
//0=January
//1 =December
 let d1=new Date(0,2,1999,9,34,2,12);
 console.log(d1.toLocaleString());// 8/20/1905, 9:34:02 AM
 console.log(d1.toString());


 //Dates Method
 console.log("========🦢Important Dates method in js🦢=============")
 //There are many method in date but few are frequently used 
 let currdate2=new Date();
 console.log(currdate.toString());///   Tue Jul 26 2022 10:58:28 GMT+0530 (India Standard Time)
 console.log(currdate.toLocaleString());// 7/26/2022, 10:58:28 AM

 //Get some part of the date like day and month
 console.log("=========Getters of date method========");
 console.log(currdate2.getFullYear());//return full year
 console.log(currdate2.getMonth());//return month
 console.log(currdate2.getDate());//return Date 
 console.log(currdate2.getDay());//Monday=1 and sunday as 7
 


 //Set Some part of the date
 console.log("=========Setters of date method========");
 console.log(currdate2.setFullYear(2022,12,01));//set full year
 console.log(currdate2.setMonth(2));//set month
 console.log(currdate2.setDate(23));//set Date 
 console.log(currdate2.toLocaleString());