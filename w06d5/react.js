function Button() {
  return (
    <button onClick={() => console.log("Button Clicked")}>
      Click me!
    </button>
  );
}

function Button() {
  const doStuff = () => {
    console.log("Do stuff.");
    console.log("Do more stuff.");
    console.log("Do EVEN MORE stuff!");
  };

  return <button onClick={doStuff}>Click me!</button>;
}

function MyClickableDiv() {
  return (
    <div onClick={(event) => {
      console.log(`The mouse coordinates of this click event are: x: ${event.screenX} and y: ${event.screenY}`);
    }}
    >
    </div>
  );
}

// solution 1
<Profile firstName="Amy" lastName="Mansel" avatar="/profile-hex.png" />

const user = {
  firstName: "Amy",
  lastName: "Mansel",
  avatar: "/profile-hex.png",
};

// solution 2 (same as 1)
<Profile {...user} />;


//
function doStuff() {
  console.log("This is the doStuff function.");
  // do stuff
}

// CORRECT: doStuff is passed as a reference!
<Profile doStuff={doStuff} />;

//

function Parent() {

  function doSomething() {
    console.log("Do something");
  }

  return (
    <><><h1>I am the parent. Here is the child.</h1>
      <Child whatever={doSomething} /></>
      {/* OR  */}
      <Child onClick={doSomething} /></>
  );
}

function Child(props) {
  return <div onClick={props.whatever}>Click me!</div>;
  // OR
  return <div onClick={props.whatever}>Click me!</div>;
}

//Passing data down with props

//solution 1.
<Profile firstName="Amy" lastName="Mansel" avatar="/profile-hex.png" />

//solution 2. 

const user = { firstName: "Amy", lastName: "Mansel", avatar: "/profile-hex.png" };

<Profile {...user} />

// Calling the useState() hook will return an array containing two values:

// a reference to get the current value of the state
// a setter function (i.e.a way to set the reference and re-render the app)
// These two values are typically declared in a single line using array destructuring(see below).

const [reference, setReference] = useState();
// or
const [state, setState] = useState();

//
let [x, setX] = useState(42);
// WRONG!
x = 99;

// CORRECT!
setX(99);

//
function DisplayWord(props) {
  const [word, setWord] = useState("");

  return (
    <main>
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Please enter a word"
      />
      <h1>Your word is: {word}.</h1>
    </main>
  );
}

// So, you may want to consider a < Fragment >.Unlike a < div >, a React < Fragment > does not create any extra DOM nodes, which can clutter up your HTML output and cause problems with your layout.

// Fragment is available as part of the React library.To use a React Fragment, you can do this:

return (
  <React.Fragment>
    <h1>A heading</h1>
    <p>A paragraph</p>
  </React.Fragment>
)

  // JSX
  < div onClick = "alert(`You just clicked this div.`);" className = "some-class" disabled > Click Me</div >
    // ...will result in the following HTML in the browser:

  // < !--Standard HTML-- >
  <div onclick="alert(`You just clicked this div.`);" class="some-class" disabled>Click Me</div>