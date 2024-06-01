"use strict";
// question no 02 //
// store a person name in a variable //
let personName = "Asharib";
// print a message to that person //
console.log(`"Hello ${personName}, would you like to learn some typescript today?"`);
// question no 03 //
// store a name in a variable //
let myName = "sadia kanwal";
// printing it in lowercase //
console.log("lowercase:", myName.toLowerCase());
//printing it in upper case //
console.log("uppercase:", myName.toUpperCase());
// printing it in title case //
let words = myName.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("titlecase:", titleCaseName);
