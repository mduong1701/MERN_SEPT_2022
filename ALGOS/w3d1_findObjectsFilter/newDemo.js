var animals = ["lion", "zebra", "elephant", "giraffe"];
// animals[0]
// for(someElement of animals){
//     console.log(someElement);
// }
// ----- OBJECTS --------
const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: {
        loud: true,
        sound: "woof"
    },
}
// doggo.name
for (key in doggo) {
    console.log(key, doggo[key]);
}

const doggoKeysArray = Object.keys(doggo);
// console.log(doggoKeys);
const doggoValuesArray = Object.values(doggo)
// console.log(doggoValuesArray);
const doggoEntriesArray = Object.entries(doggo)
console.log(doggoEntriesArray);

doggo.hasOwnProperty("favFood") // true / false 0(1)
console.log(doggo.hasOwnProperty("what"));