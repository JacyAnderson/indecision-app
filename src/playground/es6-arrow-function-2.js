// arguements object - no loger bound with arrow functions

const add = (a, b) => {
	return a + b;
};

console.log(add(55, 23));

// this keyword - no longer bound

const user = {
	name:'Jacy',
	cities: ['Honoka\'a','Boston', 'Denver'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [21, 45, 98],
	multiplyBy: 321,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());