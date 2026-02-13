                            // conversion to string
let score = undefined
console.log(typeof score)
let newValue = String(score)
console.log(typeof newValue)
console.log(newValue);

// 33 => "33"
// undefined/0/null => remains exact same
// on converting most things in string their type change to string and results in same value


                            // conversion to number
let value = " "
console.log(typeof (value));
let currentValue = Number(value)
console.log(typeof (currentValue));
console.log(currentValue);

// "33" => 33
// null => 0
// true => 1, false => 0
// undefined => NaN
// "" => 0, " " => 1
// "hit123" => NaN

                            // conversion to boolean 
let input = 33
console.log(typeof input);
let newInput = Boolean(input)
console.log(typeof newInput)
console.log(newInput)

// 0 => false, 1 => true
// null/undefined => false
// 33 => true 
// empty string to false and string with value to true

// *************************************operations**********************************
let number = 10
let negNumber = -number
console.log(negNumber);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**4);
console.log(2/4);
console.log(2%4);

let str1 = "hello"
let str2 = " laxmi"
str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2"); // => 12
console.log(1 + "2" + 2); // => 122
console.log(1 + 2 + "2"); // => 32
console.log("1" + 2 + 2);

// prefix and postfix incremetation for mdn


 