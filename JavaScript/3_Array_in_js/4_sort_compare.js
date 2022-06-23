//sort and compare method
//sort is the method in the array which based on sorting based on string not on numbers
//so if you want to sort numbers it gives false or incorrect result
//sorting is based on utf -16 bascially on alphabetical order
//and it set to ascending by default

const words=['jai' , 'shree' , 'ram' , 'jai', 'shiv' ,'shankar'];
console.log(words);//[ 'jai', 'shree', 'ram', 'jai', 'shiv', 'shankar' ]
console.log(words.sort());//[ 'jai', 'jai', 'ram', 'shankar', 'shiv', 'shree' ]

