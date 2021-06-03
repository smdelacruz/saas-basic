interface Person{
    first: string;
    last: string;
    [key: string]: any // #comment2 if remove see comment 1 and try to uncomment
}

const person: Person = {
    first: 'Jeff',
    last: 'Delany'
}

const person2: Person = {
    first: 'Amy',
    last: 'Chen',
    fast: true  // only works because of comment 2
    // fast: true #comment1 interface will restrict the shape of the object
}


// Functions
// x: number, only accepts number
function pow(x: number, y:number){
    return Math.pow(x,y); // implicitly return number because of Math function
}
pow(5,10)

// : string will return a string value, so should explicilty convert to string
function pow1(x: number, y:number): string {
    return Math.pow(x,y).toString(); // explicitly return number because of Math function
}
pow1(5,10)

// some functions does not return a value, or side effects
function pow2(x: number, y:number): void {
    Math.pow(x,y).toString(); // explicitly return number because of Math function
}
pow2(5,10)


// Array
// push different value to an array
const arr = []
arr.push(1)
arr.push('23')
arr.push(false)

// number
const arr1: number[] = []
arr1.push(1)
// arr1.push('23') error
// arr1.push(false) error


// tuple
type MyList_required = [number, string, boolean] // required
type MyList_optional = [number?, string?, boolean?] // optional

const arr2: MyList_optional = []
// const arr3: MyList_required = [] will have error 



// Generics
// T : means you can pass any type
class Observable<T> {
    constructor(public value: T){} 
}

let x : Observable<number>;
let y : Observable<Person>;
let z = new Observable(23)