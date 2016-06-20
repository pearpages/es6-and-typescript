import { Category } from './enums';
import { Book, DamageLogger } from './interfaces';

function getAllBooks(): Book[] {
    let books: Book[] = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available:false, category: Category.Fiction},
        {id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];
    
    return books;
}

function getFirstAvailable(books = getAllBooks()) {
    
    return books.find(book => book.available);
   
}

function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    
    let result: Array<string> = getAllBooks().reduce(function(result,current,index,array) {
        if(current.category === categoryFilter) {
            result.push(current.title);
        }
        return result;
    }, []);
    
    return result;
}

function logBookTitles(titles: string[]): void {
    titles.forEach((current) => console.log(current));
}

function getBookById(id: number): Book {
    return getAllBooks().find(book => book.id === id);
}

function createCustomerId(name:string,id:number):string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string): void {
    
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(customer);
    
    var res: string[] = [];
    
    bookIDs.forEach(id => {
        res.push(getBookById(id).title);
    });
    
    return res;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    const allBooks = getAllBooks();
    
    if(typeof bookProperty == 'string') {
        return allBooks.reduce((found,book) => {
            if(book.author === bookProperty) {
                found.push(book.title);
            }
            return found;
        }, []);
    } else if (typeof bookProperty == 'boolean') {
        return allBooks.reduce((found,book) => {
            if(book.available === bookProperty) {
                found.push(book.title);
            }
            return found;
        }, []);
    }
}

function printBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}