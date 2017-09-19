// const square = function (x) {
// 	return x * x;
// };

// // const squareArrow = (x) => {
// // 	return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(99));



const getFirstNameVerbose = (fullName) => {
	return fullName.split(' ')[0];
};

console.log(getFirstNameVerbose('Mike Stenibergen'));

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShort('John Steinbeck'));