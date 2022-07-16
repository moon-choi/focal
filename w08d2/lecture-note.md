# unit :

smallest pieces of our code (functions)

# integration:

various pieces working together (rendering components)

# end to end:

# regression:

# penetration:

# jest uses test()

- expect().toBe()
- before: set up
- beforeEach
- after: clean up

# mocha uses it()

# jest is more popular than mocha

- we don't have to require assertion because it has assertion built in.
  e.g. expect..

- toContain() : strict equality

# chai is an assertion library

- jest doesn't have to tied to react, you can use it for anything.

# magic number

- a number that is not saved as variable? e.g. tweeter : 140. not dynamic?

# npm test --verbose

# npm test -- --verbose (i want you to pass this down) <- it adds checkmark ??

try npm test -- -v
try
npm t -- -v

# GG / BLNT (better luck next time)

## JEST

# api: technical details

# doc"

# octopus:

testing-library.com

import {rendeer, getByTestId} from @...

# data-\*

data-testid
for HMTL..
data-

to hide things, you an use data-
uses don't see this.

# query, get: synchronous

- query: if it can't find the thing, returns null -> it's up to us to decide what to do after.
- get: if it can't find the thing, it throws an error immediately -> we will much likely use this.
- find: asynchronous. try over and over to find the thing.
- find returns a promise.

https://testing-library.com/docs/ecosystem-jest-dom

- toBeVisible
- toBeEmpty

# global getByTestId will be shadowed by local getByTestId

# you can invert the testing by adding the word NOT

expect(robotHeadIcon).not.toHaveClass('cheating')

# quick way to toggle a value to oppositie

cheating: !prev.cheating

# double negation

!!'cheating'

-> to return a value to boolean value

# we don't want to make live data appear because test will fail depending on score changes.

- we need to make fake version of axios.
- src > **.mocks.** > axios.js

# axios.defaults.baseURL <- axios request

# debug = render()

# npm test -- --coverage :

# npm test -- --coverage --watchAll=false

test coverage..

stmts: lines of code, doing things

.gitignore: /coverage (all devs run tests but we aren't going to commit)

# jest is owned by facebook

# istanbul: jest brought in istanbul

- stand on the shoulders of giants


  const registerPlayerItem = (value, updater) => {
updater(prevState => ({ ...prevState, playerSelection: value }));
  };