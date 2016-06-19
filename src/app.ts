class HelloWorld {
    constructor(public message: string) {}
}

var hello = new HelloWorld('Hello Typescript');

console.log(hello.message);