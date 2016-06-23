/// <reference path="lodash.d.ts" />

// this can only work on a client not in node, because is trying to use more than one module per file
import {calculateLateFee} from './lib/utilityFunctions';
import * as _ from 'lodash';

let snakeCaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);

let fee = calculateLateFee(2);
console.log(`Fee: ${fee}`)