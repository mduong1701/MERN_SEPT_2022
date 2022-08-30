// Functional programming
// https://login.codingdojo.com/m/130/6947/50208
// .map() .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const newAnimals = animals.map( (everyOneAnimal, someIdx) => {
    // console.log("I'm looking at ", everyOneAnimal);
    return everyOneAnimal + " is cool, " + someIdx 
})
const newAnimalsShort = animals.map((eachOneElement, bob)=>{
    return `${bob+1} - ${eachOneElement} is very cool`;
})




// console.log(newAnimalsShort);

// --- filter ---
const filteredAnimals = animals.filter((animal, i) => {
    if(animal.length <= 5) {
        return true
    } else {
        return false
    }
})

const shortFilter = animals.filter((a)=> { 
    return a.length <= 5;
})
const shortFilter2 = animals.filter(a => {
    // console.log("hello");
    return a.length <= 5
}).map(el => el + " is cool")

// console.log(shortFilter);

// console.log(

//     shortFilter.map(el => el + " is cool")
// );






// ----------------

const people = [
    {name: "Bob", age: 30 },
    {name: "Mary", age: 31},
    {name: "Sue", age: 28},
    {name: "George", age: 38}
];

const varName = people.filter((person) => {
    // console.log(person.age);
    if (person.age >= 30) {
        return true
    } else {
        return false
    }
})


const newPeople = people.filter( (el) =>  el.age >= 30).map( p => p.name + " is >= 30")

// console.log(
//     animals.pop()
// );

console.log(newPeople);












// setTimeout(function(){
//     console.log("hello!!!!");
// }, 3000)













