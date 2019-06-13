function propEx() {
    var weather = {
        fall: "chilly",
        winter: "cold",
        spring: "warm",
        summer: "hot"
    };

    document.getElementById("propExResults").innerHTML = "Fall is " + weather.fall + "and spring is " + weather.spring + ".";
}

function methodEx() {
    var person = {
        firstName: "David",
        lastName: "Smith",
        hairColor: "Blue",
        eyeColor: "Silver",
        race: "Elf",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    document.getElementById("methodsExResults").innerHTML = "Full Name: " + person.fullName() + "<br /> Race: " + person.race;

}

function createPerson() {
    var person = {
        firstName: document.getElementById("firstName").value,
        lastName: String(document.getElementById("lastName").value),
        favFood: String(document.getElementById("favFood").value),
        favWeather: String(document.getElementById("favWeather").value),
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    document.getElementById("personResults").innerHTML =
        person.fullName() + " likes " + person.favFood + " and loves " + person.favWeather + " weather.";
}

/******INHERITANCE*****/

function testRun() {
    //Vehicle - superclass
    function Vehicle(name) {
        this.name = name;
    }

    // superclass method
    Vehicle.prototype.start = function () {
        return "engine of " + this.name + " starting...";
    };
    // Car - subclass
    function Car(name) {
        Vehicle.call(this, name); // call super constructor.
    }
    // subclass extends superclass
    Car.prototype = Object.create(Vehicle.prototype);
    // subclass method
    Car.prototype.run = function () {
        console.log("Hello " + this.start());
    };


    // instances of subclass
    var c1 = new Car("Fiesta");
    var c2 = new Car("Baleno");
    // accessing the subclass method which internally access superclass method
    c1.run(); // "Hello engine of Fiesta starting..."
    c2.run(); // "Hello engine of Baleno starting..."
}

