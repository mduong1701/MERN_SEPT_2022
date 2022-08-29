
// var y = "hello"

// function sayHi() {
//     var y = "hi";
//     return y;
// }


// console.log(sayHi()); // ?
// console.log(y); // ? hello? hi?

// ---- hoisting ---

// console.log(dog);
// var dog = "Spark";


// let dog = "Spark"
// console.log(dog);

// const num = 3;
// console.log(num);
// num = 5;

// console.log(
//     hello(dog)
// );

// function hello(name) {
//     return "hello " + name;
// }




// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const email = "john@john.com"
const {firstName, email: personEmail} = person;
console.log(firstName, personEmail);

const [,,a,,b] = animals
console.log(a, b);


const firstName = person.firstName;
const email = person.email
const secondAnimal = animals[1];

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
const { addresses: [,bob] } = person
console.log(bob);

// --- rest / spread ---
const a = [1,2,3,4]
// const b = a;
const b = [...a];

a.push(10)
b.push(10)

console.log(a); // ?
console.log(b); // ?


// --- arrow functions ---
function myName1(name) {
    return "hello " + name
}

const myName2 = function(name) {
    return "hello " + name
}

const myNameArrow = (name) => {
    let x = 3;
    return "hello " + name
}

const myNameAgain = (a) => "hello " + name;

console.log(myName2());
console.log(myNameArrow());


// -------------------
const x = 5;
if (apiData) {
    return "yes"
} else {
    return "no"
}

apiData ? "....." : "<p>loading...</p>";






