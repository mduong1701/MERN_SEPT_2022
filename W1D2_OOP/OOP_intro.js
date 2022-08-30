// what are Classes?
//  blueprint 

const myBook = {
    title: "my Cool JS",
    pages: 9001,
    author: "John",
    publishYear: 2022
}

class Book{
    constructor(bookTitle, bookPages, bookAuthor, publishYear=2022) {
        // console.log("what is this? => ", this);
        this.title = bookTitle;
        this.pages = bookPages;
        this.author = bookAuthor;
        this.publishYear = publishYear;
    }
}

const nameOfTheBook = new Book("Lord of the Rings", 1000, "JRR Tolkien");
// console.log(nameOfTheBook);


class Vehicle{
    constructor (name, year, make, model, miles, size){
        this.name = name;
        this.year = year;
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.engineSize = size
    }

    drive() {
        this.miles += 10;
        console.log(this.name + " drove " + this.miles + " miles");
        // return this;
    }

    honk(anotherVehicle) {
        if(anotherVehicle instanceof Vehicle) {
            console.log(`${this.name} honked at ${anotherVehicle.name}` );
        } else {
            console.log("hello");
        }

    }

}

const lexus = new Vehicle("Bob", 2031, "Lexus", "LS350", 10, "v8");
// lexus.drive().drive().drive().drive();
// console.log(lexus.drive());

class Tesla extends Vehicle{
    constructor(name, model, size, autopilot=false) {
        super(name, 2022, "Tesla", model, 10, size);
        this.autopilot = autopilot;
    }

    
}

const modelS = new Tesla("speedy", "S", "100KW", true);
console.log(modelS);
modelS.drive()

lexus.honk(modelS);

const person = {
    name: "Peter"
}

lexus.honk(person);