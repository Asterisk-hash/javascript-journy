let accountId = 1234
const accountName = "laxmi"
var accountEmail = "laxmi@123" // shouldn't be used due to block scope and functional scope issues
accountStatus = "loggedIn"
accountId = 2314
console.log(accountId);
// accountName = "lakshmi" not allowed, typeError
console.log(accountName);
console.table([accountEmail, accountStatus, accountId, accountName]) // for printing multiple variables at once in tabular format
let accountState
console.log(accountState); // undefined
