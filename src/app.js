// app.js

console.log('app.js is running');

// JSX - JavaScript XML

const app = {
	title: 'Indecision App',
	subtitle: 'The Subtitle',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault(); // prevents full page refresh

	const option = e.target.elements.option.value; // grabs the value of the option form input

	if(option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

const onRemoveAll = () => {
	app.options = [];
	render();
}; 


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render  = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options:' : 'No options' }</p>
			<p>{app.options.length}</p>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((option) =>  <li key={option}>{option}</li>)
				}
			</ol> 
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

render();
