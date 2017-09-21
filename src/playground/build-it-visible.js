// run: 
// src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
// to start this file on server

const appRoot = document.getElementById('app');

const build = {
	title: 'Visibility Toggle'
};

let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>{build.title}</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'Hide Details' : 'Show Details'} 
			</button>
			{visibility && (
				<div>
					<p>Here's the deets</p>
				</div>
			)}
		</div>
	);		
	ReactDOM.render(template, appRoot);
}

render();

