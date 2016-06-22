/// <reference path="./src/utilities/utilityFunctions.ts" />

// this can only work on a client not in node, because is trying to use more than one module per file
import util = Utility.Fees;

let fee = util.calculateLateFee(2);
console.log(`Fee: ${fee}`)