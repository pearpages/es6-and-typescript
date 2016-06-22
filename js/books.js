"use strict";
var enums_1 = require('./enums');
function getAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function getFirstAvailable(books) {
    if (books === void 0) { books = getAllBooks(); }
    return books.filter(function (book) { return book.available; })[0];
}
function getBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    var result = getAllBooks().reduce(function (result, current, index, array) {
        if (current.category === categoryFilter) {
            result.push(current.title);
        }
        return result;
    }, []);
    return result;
}
function logBookTitles(titles) {
    titles.forEach(function (current) { return console.log(current); });
}
function getBookById(id) {
    return getAllBooks().filter(function (book) { return book.id === id; })[0];
}
function createCustomerId(name, id) {
    return name + id;
}
function createCustomer(name, age, city) {
}
function checkoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log(customer);
    var res = [];
    bookIDs.forEach(function (id) {
        res.push(getBookById(id).title);
    });
    return res;
}
function getTitles(bookProperty) {
    var allBooks = getAllBooks();
    if (typeof bookProperty == 'string') {
        return allBooks.reduce(function (found, book) {
            if (book.author === bookProperty) {
                found.push(book.title);
            }
            return found;
        }, []);
    }
    else if (typeof bookProperty == 'boolean') {
        return allBooks.reduce(function (found, book) {
            if (book.available === bookProperty) {
                found.push(book.title);
            }
            return found;
        }, []);
    }
}
function printBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//# sourceMappingURL=books.js.map