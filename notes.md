## Setup

### JSX - JavaScript XML

### Babel - Compiles ES6 to boring JS

#### When adding Babel, you must make sure to include the React preset (to allow the use of JSX) and env preset.

#### The following code sets where we write our JSX code (src/app.js) and where it out puts in boring code:

babel src/app.js --out-file =public/scripts/app.js --presets=env,react

#### The following code sets  abel to watch for changes: 
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 
