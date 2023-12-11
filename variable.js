// investigation study

const accountId = 26524
let accountEmail = "ayubsha@gmail.com"
var accountPassword = "12334"  // we not use var because there is problem with scope
accountCity = "garam chashma"
let accountState; // is should be undefined because we don't assign value  yet

// accountId = 24343 not allowed
accountEmail = "alam@gmail.com"
accountPassword = "78767"   
accountCity = "zhiture"

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);