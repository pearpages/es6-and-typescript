/// <reference path="./src/utilities/utilityFunctions.ts" />
/// <reference path="lodash.d.ts" />

// this can only work on a client not in node, because is trying to use more than one module per file
import util = Utility.Fees;
import * as _ from 'lodash';

let snakeCaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);

let fee = util.calculateLateFee(2);
console.log(`Fee: ${fee}`)