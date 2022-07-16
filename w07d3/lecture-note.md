# match what child (header.js) is expecting in the parent file(app.js).

# props is anything that comes from outside the component

# string zero

# short circuit

right side has to be always true

## exponentation

milliion: 6 zeros.
Billion: 9 zeros.

e.g. 1e6
e.g. 2e9

setCounter is async
it is set for the next rendering

setCounter: future counter's problem

# callback function

peak into the future state by using parameter
return: whatever comes back becomes the future state.

// stale state

# immutable

spread operator is only creating shallow copy

spread operator: brand new reference. not the same reference.

rest operator:

# copy an array/object

- deep copy: lotide
- shallow copy: map, slice/splice, spread operator

# these are the same. but bottom is more industry standard.

const [...myCopy] = numbers;
const myCopy = [...numbers];

# INPUT: must have 2 attributes -> value, onChange

onChange = { { (event) => event.target.value } }

// cannot read properties of undefined === it's not about map itself
it's about the array you're mapping through.

-> start with an empty array. useState([])
-> you can map through an empty array.

// map creates a brand new array.

# key is only used internally in react. so it doesn't show in the console.

// combine states into one state object.
e.g. setTopping, setToppings, setCrustType
