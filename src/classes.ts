import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

class ReferenceItem {
    
    private _publisher: string;
    static department: string = 'Research';
    
    constructor(public newTitle: string, private newYear:number) {
        console.log('Creating a new ReferenceItem...');
    }
    
    printItem(): void {
        // Template strings
        // this keyword to reference properties and methods in the same class
        console.log(`${this.title} was in ${this.year}.`);
        console.log(ReferenceItem.department);
    }
    
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
}

export { UniversityLibrarian, ReferenceItem };