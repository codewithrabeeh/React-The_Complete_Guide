let age: number;

age = 12;

let userName: string = 'hello'

let isTrue: boolean = false

let arr = ['hello']

let hobbies: string[]

hobbies = ['hello', 'everyone']

let person: {
    name: string,
    age: number,
    place: string
}; // object type definition

person = {
    name: 'hello',
    age: 22,
    place: 'chaliyam'
}

let people: {
    name: string,
    age: number
}[]; // this extra '[]' means that we don't strictly need to add all the keys in an object
// eg: people = {name: 'here name only'} :smile:PP

// Type Alias

type Org = {
    name: string,
    phone: number
} // define a structure

let company: Org; // then create an object with this type aliases

company = {
    name: 'Apco',
    phone: 3434
}


// Type inference

let course = 'hello there'
// course = 3434 // causes error 

// Union type

let post: string | number;
// let post: string | number[]; // or you can also arrays type too

post = 'hello'
post = 45

// Functions & Types

function add(a: number, b: number): number { // Don't need to explicitly define 
    return a+b;                              // return type i.e 'er): number'
}

function print(value: any) { // hover over this function keyword 
    console.log(value)       // you can see void (type inference) as return type.
}                            // because there is no return value in this function.

// Generics

function insertAtBeginning<T>(array: T[], value: T) { // '<T>' could be anything eg: '<A>'..etc. And
    const newArray = [value, ...array] // we are replacing 'any' with 'T'. 
    return newArray;
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

stringArray[0].split('') // no error here.

updatedArray[0].split('') // after implementing generic, starts showing error on 'split'

