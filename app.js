/// <reference path="./js/utilities/utilityFunctions.ts" />
// this can only work on a client not in node, because is trying to use more than one module per file
var util = Utility.Fees;
var fee = util.calculateLateFee(2);
console.log("Fee: " + fee);
//# sourceMappingURL=app.js.map