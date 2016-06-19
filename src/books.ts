function getAllBooks() {
    let books = [
        {title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {title: 'A Farewell to Arms', author: 'Ernest Hemingway', available:false, category: Category.Fiction},
        {title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        {title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];
    
    return books;
}

function getFirstAvailable(books) {
    
    return books.find(book => book.available);
   
}

enum Category { Biography, Poetry, Fiction, History, Children};

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
    
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

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);