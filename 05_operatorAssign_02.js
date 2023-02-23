console.log("------------------step 1-----------------------------");
function maleMarriageEligibility(gender, age, boyName){
    var result= gender=="Male" && age>=21 ?`Hey ${boyName} you are eligible for marriage`:"Not eligible for marriage";
    return result;
}
console.log(maleMarriageEligibility("Male", 25, "Billgates"));
console.log(maleMarriageEligibility("MAle", 17, "Stew Jobs"));

function femaleMarriageEligibility(gender, age, girlName){
   var result= gender=="Female" && age>=18 ?`Hey ${girlName} you are eligible for marraige`:"Not eligible for marriage";
    return result;
}
console.log("------------------step 2-----------------------------");
console.log(femaleMarriageEligibility("Female", 16, "Jennifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));

