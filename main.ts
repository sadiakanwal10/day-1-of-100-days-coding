// question no 02 //
// store a person name in a variable //
let personName:string = "Asharib";

// print a message to that person //
console.log(`"Hello ${personName}, would you like to learn some typescript today?"`);

// question no 03 //
// store a name in a variable //
let myName:string = "sadia kanwal";
 
// printing it in lowercase //
console.log("lowercase:", myName.toLowerCase());
 
//printing it in upper case //
console.log("uppercase:", myName.toUpperCase());

// printing it in title case //
let words:string[]= myName.split(" ");
let titleCaseName:string = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
    
}
console.log("titlecase:", titleCaseName);