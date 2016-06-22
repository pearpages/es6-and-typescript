import {ReferenceItem} from './classes';

export default class Encyclopedia extends ReferenceItem {
   
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }
    
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition}`);
    }
    
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}