# ES6 and Typescript

Typescript is a superset of JavasCript and we can use all the features of ES6 and more.

If we only use ES6 functionality we could also use *BabelJS*. 

[Typescript](www.typescriptlang.org)

- It is a superset of javascript
- strong typing (types add safety)
- advanced language constructs
- compiles to plain old javascript

## Installing and Setting it up

To use the new features today we can use a *Transpiler*.

```bash
sudo npm install -g tsc
# or
sudo npm i -g typescript
# typescript compiler
tsc -help
```

## ES6 Syntax

```
ES6-style TypeScript -> Typescript as transpiler -> ES5 Javascript
```

```
ES6-style Typescript -> Typescript -> ES6 Javascript -> Babel -> ES5 Javascript
```

### Characteristics of **var**

- Hoisting (they are hoisted to the top of the function)
- Functional scope (globally available in the function in which is declared)
- Variable name may be declared a second time in the same function

### Characteristics of **let**

- Not hoisted
- Block-scoped
- Variable name may only be declared once per block

### Characteristics of **const**

- Not hoisted
- Block-scoped
- A value MUST be set on **const** declaration
- Can't be changed later

- Can't avoid properties from objects to change* !!!
- Can't declare class members with const in ES6 (but see namespaces)
- Works with modules

## Namespaces (internal modules)

We can declar const in namespaces, it is not standard in ES6. Only in **Typescript**.

```javascript
namespace AtomicNumbers {
	export const H = 1;
	export const He = 2;
}
```

```javascript
namespace Membership {
	export function AddMember(name: string) {
		// add a new member
	}
	
	export namespace Cards {
		export function IssueCard(memberNumber: number) {
			// issue new Card
		}
	}
}

Membership.AddMember('Garrett');
Membership.Cards.IssueCard(1234);
```

### Triple-Slash References

- enhances editor support for referenced files
- Typescript compiler will compile all requrired references
- Use -outFile compiler option to generate a single JS output file

```javascript
/// <reference path="membership.ts" />
```

You need a triple slash reference in two scenarios:

- When you are referencing JavaScript type definitions e.g. definitions for node, jquery etc. for a great collection see : https://github.com/borisyankov/DefinitelyTyped
- When we want to compile using --out you can reference your files using ```/// <reference```.

You need a import/require combo when using external modules i.e. amd/commonjs. If you don't know what these mean (amd/commonjs are javascript terms, not specific to typescript) you don't have to care. Just use ```/// <reference``` and compile with --out.

## Concerning Modules

Update! To help reduce confusion, internal modules are being renamed to “namespaces”. I also advise just as strongly that you avoid mixing namespaces and modules! Thanks to Mike Brocchi for suggesting the update.

Having answered the same question in slightly different forms almost every day this week, I thought it was time to just write an article and hopefully save a lot of time.

### CHOOSE ONE

TL;DR – TypeScript has internal and external modules. When you write an application, you choose only one of these. You don’t mix them.

Stop mixing TypeScript internal and external modules. They aren’t designed to work together. They are mutually exclusive.

### NO CHOICE

If you are using NodeJS, you don’t even have to choose. You must use external modules – so your code shouldn’t have the “module” keyword anywhere. The file is the module, so you don’t need to write the word “module”. Ever.

In fact, any environment that requires either CommonJS, AMD, or ECMAScript 6 modules is a no-choice environment. You are using external modules. Don’t use the “module” keyword. Seriously. Stop it.

### WHEN TO USE INTERNAL MODULES

Don’t. If I could go back and re-write my books on TypeScript I would pretend that internal modules didn’t exist. I would take back all those pages and dedicate them to how to use external modules in your web pages, either using an AMD loader like RequireJS, or by running a minifier that crushed them all into a single file before I published them online.

The idea behind internal modules is sound – they represent the most commonly used method in professional JavaScript to keep variables out of the global scope. They reduce the global noise, reduce the chance of collisions, and help you organise you code.

Despite these sound origins, it is better to simply avoid them. External modules are even better at keeping things out of the global scope. They are also better suited to really big applications, by an immense distance.

## Typescript Types

- Boolean
- Number
- String
- Array
- Enum
- Any
- Void (abscence of a type)

```javascript
let myString: string = 'this is a string';
myString = 42; // error!!

function ReturnNumber(): number {
	return 42;
}

let anotherString: string = 'this is also a string';
anotherString = ReturnNumber(); // error!!
```

### Arrays in Typescript

Can be declared two diferent ways (see next code).

```javascript
let strArray: string[] = ['here','are','strings'];
let strArray2: Array<string> = ['more','strings','here'];
let anyArray: any[] = [42,true,'banana'];
```

#### Array functional methods

- map
- forEach
- filter/reject
- reduce
- find
- indexOf

### Typescript Enums

```javascript
enum Category { Biography, Poetry, Fiction }; // 0, 1, 2 
enum Category { Biography = 1, Poetry, Fiction } // 1, 2, 3
enum Category { Biogrpaly = 5, Poetry = 8, Fiction = 9}; // 5, 8, 9

let favoriteCategory: Category = Category.Biography;

console.log(favoirteCategory); // 5
let categoryString = Category[favoriteCategory]; // Biography
```

### Typescript Tuples

Array wehre types for first few elements are specified. Types do not have to be the same.

```javascript
let myTuple: [number, string] = [25, 'truck'];

// Additional elements can be any type from those previously specified
// other elements can have number or strings following the prior declaration
myTuple[2] = 'this works';

```

### Typescript Functions

|TypesScript|JavasCript|
|:--|:--|
|Types|No types|
|Arrow functions|Arrow functions (ES2015)|
|Function types|No function types|
|Required and optional parameters| All parameters are optional|
|Default parameters| Default parameters (ES2015)|
|Rest parameters|Rest parameters (ES2015)|
|Overloaded functions|No overloaded functions|

#### Parameter Types and Return Types

```javascript
fucntion createCustomerId(name: string: id: number): string {
	return name + id;
}
```

#### Arrow functions (labmda functions) / ES6 Arrow Functions

```javascript
let arr = allBooks.filter(function() {
	return book.author === 'Herman Melville';
});

// vs

let arr = allBooks.filter(book => book.author === 'Herman Melville');
```

- shorthand sytnax for functions
- simplifies the behavior of this
  - Value of **this** is always the containg code
  - "Lexical Binding"
  - Nested arrow functions share the same **this**
- No built-in arguments object
  - We need to use an ES6 "rest" parameter instead
- Arrow functions aren't new-able

```javascript
// arrow functions capture the *this* so we don't have to to the usual
// var self = this;
function Book() {
	this.publishDate = 2016;
	
	setInterval(() => {
		console.log(this.publishDate);
	}, 1000);
}
```

```javascript
function greet(name) {
	return 'Hello, ' + name;
}

// vs
const greet = (name: string) => "Hello, " + name;
```

#### Function Types

This is only a type definition for a function. Do not get confused with arrow functions.

```javascript
let publishFunc: (someYear: number) => string;
```

#### Optional and Default parameters for functions

In javascript all parameters are optional, in typescript all are required.

```javascript
function createCustomer(name: string, age?: number) {}

function getBookByTitle(title: string = 'The C Programming Language') {}

function getBookByTitle2(title: string = getMostPopularBook()) {}
```

#### Rest parameters

Collects a group of parameters into a single array

```javascript
function getBooksReadForCust(name:string, ...bookIds: number[]) {}

let books = getBooksReadForCust('Leigh', 2, 5);
let books2 = getBooksReadForCust('Daniel', 2, 5, 12, 42);
```

#### Function Overloads

- one symbol name
- multiple function types
- one implementation with type guards

```javascript
// we provied different object definitions but only one implementation
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
	let foundTitles: string[] = [];
	if(typeof bookProperty == 'string') {
		// code
	}
	else if (typeof bookProperty == 'bolean') {
		// code
	}
	return foundTitles;
}
```

```javascript
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
```

### Destructuring

> Break-up an object or array into component variables

```javascript
interface USPostalAddress {
	streetAddress1: string;
	streetAddress2?: string; // ? means optional
	city: string;
	state: string;
	zip: string;
	country: string;
}
```

```javascript
const addressData1 = {
	streetAddress1: '1001 Main Street',
	streetAddress2: '3rd Floor',
	city: 'Anytown',
	state: 'NY',
	zip: '10001-1234',
	country: 'USA'
};
```

```javascript
// the default value in streetAddress2: stret2 = "" only applies if it is undefined
const {streetAdress1: street1, streetAddress2: street2 = "", city, state, zip, country} = addressData1;
```

### Destructuring Arrays with Rest and Spread

```javascript
const names = ['Alice', 'Bob', 'Charlie','Dana','Elvis','Fran','George'];
```

```javascript
const firstTraditional = names[0];
```

```javascript
// the first element in the array will be assigned to firstDestructure, the second to secondDestructure
const [firstDestructure, secondDestructure] = names;

// if names was empty, all the variables would get undefined
```

```javascript
// you can set default values
const [firstDestructure = 'Steve', secondDestructure] = names || [];
```

```javascript
// we can also get the rest of the elements not assigned in another variable
const [firstDestructure = 'Steve', secondDestructure, ...more] = names || [];
```

```javascript
// thanks to this ... notation, it will give us an empty array if we call it with no parameters
// in this example we have a list of strings and we get an array of strings
multiGreet('Alice','Bob', 'Charlie');

function multiGreet(...items) {
	items.forEach(
		(item) => {
			console.log('Hello, '+item)
		};
	);
}
```

```javascript
// if we have an array and we want to pass it as a list of arguments we can do it like this:

multiGreet(...names);
```

```javascript
const names = ['Alice','Bob','Charlie','Dana'];
const names2 = ['Isaac','Jane'];

// merge arrays and add another element, which makes sense with what we've said before about getting a list of elements from an array
const names3 = [...names,...names2, Kyle];
```

### 

### ES6 String Templates

```javascript
const myCar = 'BMW M3';

const useBackTick = `Hello World!`;

const substitutions = `I love ${myCar}!`;

console.log(`Hello, ${item}.`);
```

### Tagged String Templates

```javascript
function multiGreet(...items: string[]) {
	items.forEach(item => {
		console.log(friend`Hello, ${item}.`);
		});
}

function friend(strings: string[], ...substitutions: string[]) {
	if (!substitutions[0]) {
		substitutions[0] = 'Friend';
	}
	return processTaggedTemplate(strings, substitutions);
}

function processTaggedTemplate(strings: string[], substitutions: string[]) {
	const result = [];
	substitutions.forEach((sub,index) => {
		result.push(strings[index],sub);
		});
	result.push(strings[strings.length -1]);
	return result.join('');
}
```

### Using the ES6 for of Loop

```javascript
const names = ['Alice','Bob','Charlie','Dana','Elvis','Fran','George','Hope'];

names.forEach(item => {console.log(item);}); // values

for(let item in names){ // indexes
	console.log(names[item]);
}

for (let item of names) { // values
	console.log(item);
}
```

## ES6 Modules

Exporting and importing objects:

- Require.js (AMD format)
- SystemJS (AMD,CommonJS,ES2015,its own)
- node.js (CommonJS)

> WHATWG: Web Hypertext Application Technology Working Group

[https://whatwg.github.io/loader/](https://whatwg.github.io/loader/)

Typescript can Transpile to:

- CommonJS
- AMD
- UMD
- System

### Introduction

With the introduction of ES6 Modules we don't polute the global scope and therefore we have to explicitly export and import the functionality we want to use.

```javascript
// library.js

function doSomething() {
	
}

export dosomething;
```

```javascript
// program.js
import {doSomething} from "library";

doSomething();
```

### Converting a File to an ES6 Module

```javascript
export function helloWorld() {
	console.log('Hello World');
}
```

```javascript
function helloWorld() {
	console.log('Hello World');
}

export {helloWorld}
```

```javascript
export {helloWorld, someFunction, someVariable, someClass};
```

```javascript
export {wowify as superWowify}
```

### Importing an ES6 Module

```javascript
import * as hello from './helloWorld';

hello.hello();
```

```javascript
import {hello} from './helloWorld';

hello();
```

```javascript
import {hello as h} from './helloWorld';

h();
```

```javascript
import {hello, goodbye} from './helloWorld';

hello();
goodbye();
```

### Default Exports

```javascript
export {wowify as default, mehify};
```

```javascript 
import {default as wowify} from './wowify';
```

```javascript
import wowify, {mehify} from './wowify';
```

```javascript
// movie.ts
export default class {
	title: string;
	director: string;
}

// kids.ts
import AnimatedMovie from './movies';
let cartoon = new AnimatedMovie();
```


### AMD and RequireJS (broweser side)

> AMD: Asynchronous Module Definition

```javascript
// tsconfg.json
{
	"version": "1.5.0-beta",
	"compilerOptions": {
		"target": "es5",
		"module": "amd",
		// ...
	}
}
```

```html
<script data-main="program" src="/scripts/require/require.js"></script>
```

### Ambient External Module Declarations

...

### Using CommonJS and Node

```javascript
// tsconfg.json
{
	"version": "1.5.0-beta",
	"compilerOptions": {
		"target": "es5",
		"module": "commonjs",
		// ...
	}
}
```

### Using the UMD Module Format

```javascript
// tsconfg.json
{
	"version": "1.5.0-beta",
	"compilerOptions": {
		"target": "es5",
		"module": "umd",
		// ...
	}
}
```

### SystemJS

- System.register()
- Polyfill for new System object
- AMD
- CommonJS
- Shim for "Global" JS
- Non-JS, CSS, JSON images

```javascript
// tsconfg.json
{
	"version": "1.5.0-beta",
	"compilerOptions": {
		"target": "es5",
		"module": "system",
		// ...
	}
}
```

```html
<script src="/scripts/systemjs/sytem.js"></script>
<script src="../system-config.js"></script>
```

## ES6 Classes

- constructor functions
- instance properties and methods
- static properties and methods
- inheritance

### Programming with Objects in ES6

- Before ES6
  - Prototypal Inheritance or Delegation
  - Simple Object Literals
  - Factory Functions
- Classes

### Creating and Using an ES6 Class

```javascript
class Contact {
	
}

const alice = new Contact();
alice.name = 'Alice';
alice.phone = '555-1212';
alice.email = 'alice@example.com';

console.log(JSON.stringify(alice));
```

```javascript
class Contact {
	name: string;
	phone: string;
	email: string;
}

const alice = new Contact();
alice.name = 'Alice';
alice.phone = '555-1212';
alice.email = 'alice@example.com';

console.log(JSON.stringify(alice));
```

### Using a Constructor

```javascript
class Contact {
	name: string;
	phone: string;
	email: string;
	constructor(name, phone, email?) {
		// the question mark it's from typescript and makes it optional
		this.name = name:
		this.phone = phone;
		this.email = email;
	}

	const alice = new Contact('Alice','555-1212','alice@example.com');
}
```

### Destructuring in a Constructor Signature

```javascript
	const alice2 = new Contact({name: 'Alice', phone: '555-1212'});
```

### Methods

- public (by default)
- protected
- private (but not at runtime)


```javascript
class Contact {
	email: string;
	phone: string;
	name: string;
	greet(greetee: string) {
		return `Hello, ${greetee}, my name is ${this.name}`;
	}

	constructor({name, phone, email = undefined}) {
		this.name = name;
		this.phone = phone;
		this.email = email;
	}
}

```

### Inheritance

Class declerations are not hoisted

```javascript
class Employee extends Contact {
	employeeId: string;
	hireDate: Date;
}

const pat = new Employee({name: 'Pat', phone: '555-1213'});
pat.hireDate = new Date('2015-01-01');
console.log(pat.hireDate.toUTCString());
console.log(pat.greet('Renee'));
console.log(pat instanceof Employee); // true
console.log(pat instanceof Contact); // true
```

### Calling Code from the Derived Class

> Try to avoid **deep** class hierarchies

> Compose complex classes by implementing multiple interfaces

```javascript
class Employee extends Contact {
	employeeID: string;
	hireDate: Date;
	constructor({name, phone, email = undefined, employeeID, hireDate}) {
		// using super
		super({name, phone, email});
		this.employeeI = employeeID;
		this.hireDate = hireDate;
	}
	greet(greetee: string) {
		// using super
		return super.greet(greetee) + ' By the way, I'm an employee!;
	}
}
```

### Accessors

```javascript
class Employee extends Contact {
	private _employeeID: string;
	get employeeId() {
		return this._employeeID;
	}
	set employeeID(value) {
		// if we set a value in the constructor, it will call this setter
		this._employeeID = (value || "").toLocaleUpperCase();
	}
}
```

### Class Expressions

```javascript
const useFakes = true;

if (!useFakes){
	var MyWebService = class MyWebService {
		getData(id) {
			// expensive call.
		}
	}
} else {
	var MyWebService = class Fake_MyWebService {
		getData(id) {
			console.log(`Just logging: ${id}`);
		}
	}
}

var webService = new MyWebService();
webService.getData(5);
```

```javascript
const useFakes = true;

if (!useFakes){
	var MyWebService = new (class MyWebService {
		getData(id) {
			// expensive call.
		}
	})();
} else {
	var MyWebService = new (class Fake_MyWebService {
		getData(id) {
			console.log(`Just logging: ${id}`);
		}
	})();
}

var webService = MyWebService;
webService.getData(5);
```

### Static Methods

- Utility functions
- Caching
- Tracking class metadata

```javascript
class TestStatic {
	static doubleNumber(num) {
		return num * 2;
	}
	static count = 0; // only works with Typescript not ES6
	constructor() {
		TestStatic.count += 1;
	}
}

console.log(TestStatic.doubleNumber(10));
var ts1 = new TestStatic();
var ts2 = new TestStatic();
console.log(TestStatic.count);
```

```javascript
class Library {
	constructor(public name: string) {}
	static description: string = 'A source of knowledge.';
}

let lib = new Library('New York Public Library');
let name = lib.name; // available on instances of the class
let desc = Library.description; // available on the class
```

### Interfaces

It lets us define our own **types**.

An interface in typescript is like a contract that defines a type:

- contracts define types
- compiler enforces that contract via type checking
- collection of property and method definitions
- **uses duck typing**
- once the type is defined, we cannot add properties that aren't defined in the interface

> *Duck Typing*: "When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck."

```javascript
interface Duck {
	walk:() => void;
	swim: () => void;
	quack: () => void;
}

let probablyDuck = {
	walk: () => console.log('walking like a duck'),
	swim: () => console.log('swimming like a duck'),
	quack: () => console.log('quacking like a duck')
};

function flyOverWater(bird: Duck) {}

flyOverWater(probablyDuck); // works!! 
```

#### Defining an Interface

- "interface" keyword
- list properties with their types
- optional properties denoted with "?"
- provide function signatures - no implementation

Interfaces don't have an implementation in ES5. A tanspile file of an interface is an empty file.

```javascript
interface Book {
	id: number;
	title: string;
	author: string;
	pages?: number;
	markDamaged: (reason: string) => void;
}
```

```javascript
interface ISprite {
	x: number;
	y: number;
	imageUrl: string;
	update: () => void;
}
```

```javascript
import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}

export { Book };
```

#### Interfaces for Function Types

```javascript
interface StringGenerator {
	(chars: string, nums: number): string;
}

// vs, in the later we use => instead of : 

let idGenerator: (chars:string, nums: number) => string;
```

#### Extending Interfaces

```javascript
interface LibraryResource {
	catalogNumber: number;
}

interface Book {
	title: string;
}

interface Encyclopedia extends LibraryResource, Book {
	volume: number;
}

// 

let reBook: Encyclopeida = {
	catalogNumber: 1234,
	title: 'The Book of Everything',
	volume: 1
};
```

### Classes

> Template for creating objects. Provided state storage and behavior. Encapsulate reusable functionality.

##### Constructors

Perform initialization of a class.

```javascript
class ReferenceItem {
	constructor(title: string, publisher?: string) {
		// perform initialization here
	}
	
	let encyclopedia = new ReferenceItem('WorldPedia','WorldPub');
}
```

##### Properties and Methods

```javascript
class ReferenceItem {
	numberOfPages: number;
	
	// having get and set editor means we have a property editor.
	// setters do not have a return value
	
	get editor(): string {
		// custom getter logic here, should return a value
	}
	set editor(newEditor: string) {
		// custom setter logir goes here
	}
	
	printChapterTitle(chapterNum: number): void {
		// print title here
	}
}
```

###### Setting properties in the constructor

```javascript
class Author {
	name: string;
	constructor(authorName: string) {
		name = authorName;
	}
}

// vs

class Author {
	constructor(public name: string) {}
}
```

###### Access modifiers

- public (by default, and not required)
- private
- protected

```javascript
class ReferenceItem {
    
    title: string;
    year: number;
    
    constructor(newTitle: string, newYear:number) {
        console.log('Creating a new ReferenceItem...');
		this.title = newTitle;
		this.year = newYear;
    }
    
    printItem(): void {
        // Template strings
        // this keyword to reference properties and methods in the same class
        console.log(`${this.title} was in ${this.year}.`);
    }
}
```

```javascript
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

// vs ES5

var ReferenceItem = (function () {
    function ReferenceItem(newTitle, newYear) {
        this.newTitle = newTitle;
        this.newYear = newYear;
        console.log('Creating a new ReferenceItem...');
    }
    ReferenceItem.prototype.printItem = function () {
        // Template strings
        // this keyword to reference properties and methods in the same class
        console.log(this.title + " was in " + this.year + ".");
        console.log(ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
```

#### With Interfaces

```javascript
interface Librarian {
	doWork: () => void;
}

class ElementarySchoolLibrarian implements Librarian {
	doWork() {
		console.log('Reading to and teaching children...');
	}
}

let kidsLibrarian: Librarian = new ElementarySchoolLibrarian();
kidsLibrarian.doWork();
```

```javascript
import { Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
	// in the following snippet we'll see that this method is a methond in the prototype
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

export { UniversityLibrarian };

// vs ES5 version
"use strict";
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
```

#### Abstract 

- Base classes that may not be instantiated
- May contain implementation details
- Abstract methos are not implemented

```javascript
abstract class Sprite implements ISprite {
	x: number;
	y: number;
	imageUrl: string;
	abstract update();
}

class Player extends Sprite {
	update() {
		// do whatever
	}	
}

class Monster extends Sprite {
	update() {
		// do whatever
	}
}
```

```javascript
abstract class ReferenceItem {
    
    protected _publisher: string;
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
    
    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
   
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
```

#### Class Expressions

```javascript
let Newspaper = class extends ReferenceItem {
	printCitation(): void {
		console.log(`Newspaper: ${this.title}`);
	}
}
```

## Generics (only with Typescript)

> Code that work with multiple types.

They accept "type parameters" for each instance of invocation and they apply to *functions*, *interfaces* and *classes*.

### Type parameters

They specify the type a generic will operate over. They are coded separate from function parameters inside angle brackets. And they are *conventionally* represented by the letter 'T' ```Array<T>```.

```javascript
let poetryBooks: Book[];
let fictionBooks: Array<Book>;
let historyBooks = new Array<Book>(5);
```

### Generic Functions

```typescript
function logAndReturn<T>(thing: T): T {
	console.log(thing);
	return thing;
}

let someString: string = logAndReturn<string>('log this');

let newMag: Magazine = { title: 'Web Dev Monthly' };
let someMag: Magazine = logAndReturn<Magazine>(newMag);
```

### Generic Interfaces

```typescript
interface Inventory<T> {
	getNewesItem: () => T;
	addItem: (newItem: T) => void;
	getAllItems: () => Array<T>;
}

let bookInventory: Inventory<Book>;

// populate the inventory here...

let allBooks: Array<book> = bookInventory.getAllItems();
```

### Generic Classes

We have to bear in mind that we can only use properties and methods that are generic to any type.

```typescript
class Catalog<T> implements Inventory<T> {
	private catalogItems = new Array<T>();
	
	addItem(newItem: T) {
		this.catalogItems.push(newItem);
	}	
	
	// implement other interface methods here
}

let bookCatalog = new Catalog<Book>();
```

### Generic Constraints

- Describe types that may be passed as a generic parameter.
- **extends** keyword applies constraint

```typescript
interface CatalogItem {
	catalogNumber: number;
}

class Catalog<T extends CatalogItem> implements Inventory<T> {
	// implement interface methods here
}
```

```typescript
interface ShelfItem {
    title: string;
}

export default class Shelf<T extends ShelfItem> {
    
    private _items: Array<T> = new Array<T>();
    
    add(item: T): void {
        this._items.push(item);
    }
    
    getFirst(): T{
        return this._items[0];
    }
    
    find(title: string): T{
        return this._items.filter(item => item.title === title)[0];
    }
    
    printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }
}
```

## Compiler Options and Project Configuration

[Typescript Github Page](https://github.com/Microsoft/TypeScript)
[Typescript Wiki](https://github.com/Microsoft/TypeScript/wiki)
[Compiler Options](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Compiler%20Options.md)
```tsc --help```

- module format output ```tsc --module``` or ```tsc ---m```
- [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) ```tsc --moduleResolution```
  - Classic
  - Node
- target ```tsc --target``` or ```tsc --t```
- watch ```tsc --watch``` or ```tsc --w```
 - ```tsc --outDir```
 - ```tsc --noImplicitAny```
 
 ```bash
 # app.ts is the entry point (and than follows the references)
 tsc --t ES5 --outdir js --m commonjs --sourceMap app.ts
 ```
 
 ### tsconfig.json
 
 - Marks the root of a Typescript project
 - Specifies Typescript compiler object
 - Specifies files to include in the project
 
 ```json
 // it also goes recursiveley for the dependencies 
  {
	 "compilerOptions": {
		 "target": "es5",
		 "outDir": "js",
		 "module": "commonjs",
		 "sourceMap": false
	 },
	 "files": [
		 "app.ts",
		 "classes.ts"
	 ],
	 "exclude": [
		 "node_modules",
		 "lib"
	 ]
 }
 ```
 
 If we want to use the config file but inside another project directory we can do the following:
 
 ```bash
 tsc --project ./lib
```

 ## Type Definitions
 
 They are files with type information for a library. They contain no implementation details and are basically interfaces. Primarily used as a Typescript wrapper for javascript libraries. The main benefit is design-time tool for type-checking and editor support.
 
 File names end with ```.d.ts```.
 
 Some *npm packages* already give them, but it is quite a new feature.
 
 ### DefinitelyTyped Repository
 
 [Definitely Typed Github Repository](https://github.com/DefinitelyTyped/DefinitelyTyped)
 
 **Definitely Typed** Is the most used/knwon repository, it is a huge repository.
 
 #### Downloading definition types
 
 - Direct download from the repository
 - Nuget (for visual studio)
 - tsd (type definition manager)
 - typings (type definition manager for multiple sources)
 
 #### Example
 
 ```bash
 npm init -f
 npm install lodash --save
 ```
 
 1. We copy the *lodash.d.ts* info from the [Github Repository](https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/lodash/lodash.d.ts).
 2. We add the ```//<ref``` to the *app.ts* ```/// <reference path="lodash.d.ts" />```
 
```typescript
/// <reference path="lodash.d.ts" />

// this can only work on a client not in node, because is trying to use more than one module per file
import * as _ from 'lodash';

let snakeCaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);
 ```

### tsd

- find and download type definitions
- uses DefinitelyTyped exclusively
- manages references to installed definitions
- stores "tripe-slash" references in a single file
- **it's deprecated**

### Typings

[typings github repository](https://github.com/typings/typings)

The same as *tsd* but it isn't yet widely adopted.

**Typings** is a type definition manager (multiple sources). 

#### Example

```bash
npm install -g typings
typings install lodash --save
```

### Ambient Modules

They are created with the *declare* syntax and do not define an implementation.

```typescript
// cadCatalog.d.ts

declare module "CardCatalog" {
	export function printCard(callNumber: string): void;
}
```

```typescript
// app.ts
/// <reference path="cardCatalog.d.ts" />
import * as catalog from "CardCatalog";
```