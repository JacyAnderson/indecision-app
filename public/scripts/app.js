'use strict';

// app.js

console.log('app.js is running');

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Jacy Anderson'
	),
	React.createElement(
		'p',
		null,
		'Age: 23'
	),
	React.createElement(
		'p',
		null,
		'Location: Denver'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
