/*
1.- Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only 
    if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

    toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
    newArr = str.split(/[_-]+/)
    upper = [];

    for (let i = 0; i < newArr.length; i++) {
        if(i == 0){
            upper.push(newArr[i]);
        }else{
            upper.push(newArr[i][0].toUpperCase() + newArr[i].slice(1, newArr[i].length));
        }
     }

    return upper.join('');
}

console.log(toCamelCase("the-stealth-warrior"));