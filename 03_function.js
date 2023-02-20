var num1 = 100;
var num2 = 200;

var str1 = "sweety";
var str2 = "cutey";

var name1 = "pandurang";
var name2 = "nagure";

function swapVariables(value1, value2)// var value=num1, var value=num2
{
    console.log("Before swap : ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap : ", value1, value2);
    return "Swapping variables successfully completed";
}

var swapResult = swapVariables(num1, num2); // function call or function invocation
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);

var swapResult3 = swapVariables(name1, name2);
console.log(swapResult3);

function display(num) {
    console.log(num);
    var result = typeof num;
    return result;
}

var displayResult = display(100);
console.log(displayResult);



//Function with no Arguments and No Return value

function showFullName() {
    console.log("My full name is : Pandurang Nagure");
}

showFullName(); //Fun. Call or Invoke


//Function with  Arguments and No Return value

function showAge(age) {
    console.log("My Age is : ", age);
}
showAge(23);

//Function with no Arguments and  Return value 

function fullName() {
    var name = "Pandurang Nagure";
    return name;
}
var fName = fullName();
console.log(fName);

//Function with Arguments and  Return value

function sumOfNumbers(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}

var sumResult = sumOfNumbers(100, 200, 300);
console.log(sumResult);
