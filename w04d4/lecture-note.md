# Media Queries

@media only screen and (max-width: 500px) {
body {

}
}

@media only screen and (orientation: landscape) {
body {

}
}

//only screen: not targetting speech readers, or prints.

//

--

superscede

--
CSS Preprocessros

--

# sass:

kinda like python. doesn't use bracket. uses white spaces and tabs.

# scss:

same ass css

Sass: Syntatically awesome stylesheet
Scss: Sassy CSS

npm i -g sass

sass input.scss output.css

--

SCSS allows nesting

SASS: no {}s

section {
& :hover {

}

& > li {
// when you want to be really specific with class
}

li {}
}

# MIXIN

SCSS function

@mixin headr-styles {
height: 50px;
}

because it's a function, we pass it in with (), and also passes parameters.

header {
@include header-styles()
}

@mixin make-square($n) {
height: $n;
width: $n

}
