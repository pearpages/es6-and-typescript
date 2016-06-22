"use strict";
function calculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.calculateLateFee = calculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('This is private...');
}
function purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}
exports.purge = purge;
//# sourceMappingURL=utilityFunctions.js.map