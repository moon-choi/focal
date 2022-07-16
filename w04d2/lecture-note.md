declarative vs imperative

selector

# REPL (browser console)

- dotting into an object.

  -window: it represents the current TAB.
  -document: represents webpage itself. (the page that's loaded up)

- window.location

- window.history : how many back/forwards you have.
  history.length
  history.forward

- window.navigator: the way the user navigates internet. this object represents "BROWSER"
  navigator === window.nagivator (true)
  netscape is the creator of internet.. mozilla.
  navigator.getBattery()
  navigator.getGamepads()

ctrl +L : clear

- console.dir() : different type of console.log
  console.dir(document)

- disclosure triangles

# DOM: Document Object Model

- a type of object
- HTML => DOM :  it reads line by line in HTML and creates a DOM element and keeps adding on.
- data type of DOM: "TREE"
- DOM itself is a tree.
- sitemap: more based on content / DOM: structure of the site. (they are different)

# TREE

- any node can have an unlimited number of siblings, children
- any node can only have one parent.

document.getElementById("myList").appendChild(node) -- last child (.push)
document.getElementById("myList").prependChild(node) -- first child (.unshift)

hook: a piece of process
grabbing a particular thing

vanilla js: built-in js.

# Seperation of concerns

- HTML: markup provides structure
- CSS: visual, for styling
- JS: dom MANIPULATION, TRAVERSAL, EVENT HANDLING..

# jQuery

- feature rich js library
- easy to use API

# CDN

- content delivery network

# reliable resource

cdnjs jquery 3.6.0
cdnjs.com
not the minified version. jquery.js

@@ PASTE the jquery script ABOVE your own script src.

// $ === jQuery (true)

jQuery is impertaive - directly manipulating

# imperative vs declaritive:

- imperative: we explicitly tell the computer what to do.
  (Take this array, create a dom node)
- declaritive: what we want to happen, but not how to do it.
  (e.g. CSS:.. body { bgc: color} )

--
jQuery doesn't read the whole script so things are undefined.

# solution 1. move code

- move script code to the end of the code.

# solution 2. document.ready

- $(document).ready( () => {} )

# solution 3 . defer

- <script defer src =>

--

.text() - getter
.text(something) - setter

self closing tags cannot have children
e.g. input (no room for children)
-> it can't have .text

// jquery get value back from input
.val()

$('#new-item-form).on('submit', (event) => {
event.preventDefault()
})

// we have to use Ajax and also this ^

//event.preventDefault() -> page does not refresh after submitting the form.
