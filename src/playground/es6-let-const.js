var nameVar = 'Jacy';
console.log('nameVar', nameVar);

let nameLet = 'Tyke';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

const fullName = 'Jacy Anderson';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}