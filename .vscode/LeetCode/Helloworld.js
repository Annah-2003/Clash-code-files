function createHelloWorld () {
    return function (){
        return "Hello World";
    }
}

// example usage 
const f = createHelloWorld();
console.log(f()); 