'use strict';

// run: 
// src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
// to start this file on server

var appRoot = document.getElementById('app');

var build = {
	title: 'Visibility Toggle'
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	render();
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			build.title
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'Hide Details' : 'Show Details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'Here\'s the deets'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
