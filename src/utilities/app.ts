/// <reference path="utilityFunctions.ts" />

import util = Utility.Fees;

let fee = util.calculateLateFee(2);
console.log(`Fee: ${fee}`)