// ***************************************  comparison of same data type  **************************************
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// return boolean value which are always predictable

// ***************************************  comparison of different data type  **************************************
console.log("2" > 2);
console.log("2" == 2); // true
console.log("02" == 2); //true          (equality check)

// ******************       null case   
console.log(null > 0 );     // comparison operator
console.log(null >= 0 );
console.log(null == 0 );

/* note:- equaltiy check and comparison operator in javascript works differently 
          as comparison operators convert the null into 0 */


// ******************       undefined case
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0); // false in all cases
