var greet = "good Morning";
console.log(typeof greet);

console.log("Total number chars available into this string variable - greet");
var greetlength = greet.length;
console.log(greetlength)

console.log("Find the character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("Character available at index 3 is : ",charAtIndex3);

console.log("Find the last character");
var charAtLastIndex = greet.charAt(greetlength-1);
console.log("Last char is : ",charAtLastIndex);

console.log(" Find the index by character value");
var indexOfM = greet.indexOf('M');
console.log("Index of char M is : ",indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("Index of char O : ",greet.indexOf('O'));

console.log("Index of char O : ",greet.indexOf('o'));

console.log("Index of char O using lastindexof(): ",greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Lower Case:", replaceResult.toLowerCase());

var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

//Find the total extra spaces removed from the string - myName
var count = myName.length - myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(), myName.trimEnd());

console.log("includes()");
console.log("is substring mor includes in he greet or not : ",greet.includes("Mor"));
console.log("is substring eve includes in he greet or not : ",greet.includes("Evi"));

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var splitResult = myFriendList.split(",");
console.log (splitResult);
console.log("Total words:" , splitResult.words);