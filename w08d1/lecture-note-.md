# const id = Math.random().toString(36)

^ you can cast it in the format you want.

# POSTMAN

raw -> click on 'json'

# method override

<form method= , action= s>

method="POST"
action="resource?\_method=DELETE"

<form method="POST" action="/todos/id?_method=PATCH">
if using method-override package

# Falsey value

0 and "" would be ignored
to imagine it as “if completed does not contain a value”

# double rendering prevention

get rid of React.StrictMode from index.js

# don't destructure:

because leaving props.x.x. is giving an immediate sign to the team that it's coming from parent.

# MAP FUNTION

spits out exact the same length of array
automatically pushes it into a new array

# duplicate an array (if you don't do anything to mapping)

const mapped = dogs.map( (dog) => {}
return dog
});

# react can handle array / can't handle object

react automatically iterates through an array and display it.

# key only exists in the virtual dom, not in actual dom

virtual dom: objects in memory and it can be updated over and over, react is hanging onto, updates everytime setstate changes.

once it's ready, it does comparison with actual dom.

tweeter: we didn't use react so we had to empty the whole container and re render the whole thing

updating the actual dom is the most expensive thing and it slaves away.

#axios.get is asynchronous so in the meantime we will render the todolist and calls map so we get an undefined error.

const [todos, setTodos] = useState( [] ); <- start with form of

# CORS:

it protects us from untrusted domain
localhost: trusted
CORS: Who can listen to this info?
only people from this ip address can access.
CORS lives in browser

# solutions

1. solving in the backend:
   const cors = require('cors'); <- it's a middleware
   && app.use(cors)

2. solving in the frontend: PROXY
   package.json -> add proxy to the object.
   "proxy": "http://localhost:8000" <- after you add that in, you need to restart it.

# AFTER BUILDING

app.use(express.static('../client/build')) <- take everything and put them into one directory.

front end is just a static file now.

# use elephant SQL instead of heroku database..

heroku database is a bit annoying.

git push heroku origin main <- it will cause to run the build
