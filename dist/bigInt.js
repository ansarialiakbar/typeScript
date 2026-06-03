"use strict";
let BigNumber = 112345667895454343n;
console.log(`The value of BigNumber is ${BigNumber}`);
console.log(typeof BigNumber);
let anotherBigNumber = BigInt("123456789012345678901234567890");
console.log(`The value of anotherBigNumber is ${anotherBigNumber}`);
let a = 10n;
let b = 20;
// you cannot mix bigint and number types in operations, so you need to convert the number to bigint before performing the addition
// console.log(`The sum of a and b is ${a + b}`); 
//# sourceMappingURL=bigInt.js.map