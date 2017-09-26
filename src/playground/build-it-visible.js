class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render() {
		return (
			<div>
				<h1>VisibilityToggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.visibility && (
					<h1>DETAILS HERE</h1>
				)}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// // run: 
// // src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
// // to start this file on server

// const appRoot = document.getElementById('app');

// const build = {
// 	title: 'Visibility Toggle'
// };

// let visibility = false;

// const toggleVisibility = () => {
// 	visibility = !visibility;
// 	render();
// };

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>{build.title}</h1>
// 			<button onClick={toggleVisibility}>
// 				{visibility ? 'Hide Details' : 'Show Details'} 
// 			</button>
// 			{visibility && (
// 				<div>
// 					<p>Here's the deets</p>
// 				</div>
// 			)}
// 		</div>
// 	);		
// 	ReactDOM.render(template, appRoot);
// }

// render();

