//Replace method is use to replce the some part of the string with 
// another substring

//By default replace method replaces with first match only
// It returns new string 
//It does not change the orignal string
//It is case sensitive in nature


console.log("================Replace method==============");
let sentence1="Monkey is king ";
let s2=sentence1.replace('king','animal');
console.log(sentence1)//orignal string Monkey is king
console.log(s2);// modified string Monkey is animal

