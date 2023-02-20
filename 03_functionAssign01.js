console.log ("*****STEP1*****")
function INDIA()
{
    console.log("INDIA is Great");
}
 INDIA();

 function RUSSIA()
 {
    console.log("RUSSIA is a good friend of INDIA");
 }
 RUSSIA()

 console.log ("\n*****STEP2*****")

 function personalDetails(firstName,lastName,collageName)
 {
   console.log("FirstName : ",firstName,"LastName: ",lastName,"CollageName:",collageName);
  
   
 }
 personalDetails("pandurang","Nagure","YCIS Satara");

 console.log ("\n*****STEP3*****")

 var value1 = "Virat";
 var value2 = "Anushka";

 var number1 = 1000;
 var number2 = 2000;

 function swapValuesDude( value1,value2)
 {
    console.log("Before swap : ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap : ", value1, value2);
   
}
swapValuesDude(value1,value2);
swapValuesDude(number1,number2);


console.log ("\n*****STEP4*****")

function addThreeValues(num1,num2,num3)
{
    var sum= num1+num2+num3;
    return sum;
}
 var sumResult = addThreeValues(10.23,600,40);
 console.log(sumResult);

 function addThreeValues(num1,num2,num3)
{
    var sum= num1+num2+num3;
    return sum;
}
 var sumResult = addThreeValues("Hello","Good","Morning");
 console.log(sumResult);