/*
1.- Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only 
    if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

    toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


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

*/
/*
2.-Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, 
he is known for almost always capitalizing every word. For simplicity, 
you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

String.prototype.toJadenCase = function () {
    let str = this;
    let newArr = str.split(/[\s]+/);
    let upper = [];

    for (let i = 0; i < newArr.length; i++) {
        upper.push(newArr[i][0].toUpperCase() + newArr[i].slice(1, newArr[i].length));
     }

    return upper.join(' ');
  };

  var str = "How can mirrors be real if our eyes aren't real";

 let Jaden = str.toJadenCase();

 console.log(Jaden);