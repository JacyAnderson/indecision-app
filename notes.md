## Setup

### Live Server - Runs a server and serves up a folder

live-server public

### JSX - JavaScript XML

### Babel - Compiles ES6 to boring JS

#### When adding Babel, you must make sure to include the React preset (to allow the use of JSX) and env preset.

#### The following code sets where we write our JSX code (src/app.js) and where it out puts in boring code:

babel src/app.js --out-file =public/scripts/app.js --presets=env,react

#### The following code sets  abel to watch for changes: 
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 






### Local Storage
_Only works with string data_

localStorage.setItem('name', 'Jacy');
localStorage.getItem('name');  -> Jacy
localStorage.removeItem('name');

JSON.stringify({ age: 26 }); --> "{"age":26}"
const json = JSON.stringify({ age: 26 });
JSON.parse(json); --> {age: 26}


