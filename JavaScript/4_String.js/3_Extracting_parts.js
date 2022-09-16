//Extracting  some parts from the string 
//There are 3 method for extracting the string
//1. slice (start ,end)
//2. substring(start ,end)
//3. substr(start ,length)


//Focus more on slice, it resolves all ur problem u can simply ignore rest 2 methods


//1 Slice method 
{

    let sentence1 = "apple, banana , kivi";
    console.log(sentence1);//apple, banana , kivi
    console.log("=============Slice method in js================");
    //slice has 2 parameters 
    // 1st is start and 2nd is end 
    // end value is excluding
    // negative index is allowed 

    let s1 = sentence1.slice(1, 76);
    console.log(s1);//pple, banana , kivi
    s1 = sentence1.slice(8, -2);//anana , ki

    console.log(s1);
}



{
    console.log("=================substring method in js=========");
    //substring and slice are same methods but the main difference is
    // slice supports negative indexing 
    // substring do not support negative indexing 
    //if we provide - indexing their it considered as 0 

    {
        let sentence1 = "ro-hit man sharma";
        console.log(sentence1);//ro-hit man sharma

        let s2 = sentence1.substring(3, Infinity);
        console.log(s2);//hit man sharma

        //but it not support negative indexing
        let s3 = sentence1.substring(2, -2);//
        console.log(s3);// ro is output 


    }

   


}
