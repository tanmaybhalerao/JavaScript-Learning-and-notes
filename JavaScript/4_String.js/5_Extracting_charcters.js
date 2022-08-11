//Extracting the string characters
//There are 3 ways by which we can extract the string chracters
//1.charAt()-->it return string
//2.charCodeAt()-->it returns number
//3.Property access [] --> its part of ecma
//charAt() method 
//It return the charcter at the index or position 
//very useful method in string

//Example:
let sentence1="Radhe Radhe";
console.log(sentence1.charAt(3));//it return the charcter at index 3 ie 'h'
  
  
  //charCodeAt()
  //both are same method the difference is charCodeAt return utf -16 code of that charcter
  console.log(sentence1.charCodeAt(3));//it return the utf 16 charcter code at index 3 ie 104

  //[] property access same like array
  

  console.log(sentence1[0])