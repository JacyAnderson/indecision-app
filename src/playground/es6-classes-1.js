// This is a class
class Person {
	// name ='s sets the default name
	constructor(name = 'a Mysterious Stranger', age = 0) {
		// the constructor lets us access properties passed in when creating new persons
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		// return 'Hi ' + this.name + '!';
		return `Hi, I am ${this.name} and I am ${this.age}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

// extends the class Person
class Student extends Person {
	constructor(name, major) {
		// super refers to the parent class (in this case, Person) allowing us to pass through old properties
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();


		if (this.hasMajor()) {
			description = description += ` Their major is ${this.major}`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	} 
	getGreeting() {
		let greeting = `This is ${this.name}`;

		if (this.homeLocation) {
			greeting += ` and they are from ${this.homeLocation}.`;
		} 

		return greeting;

	}
}

const me = new Traveler('Jacy Anderson', 23, 'Denver');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());