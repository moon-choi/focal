# NPM: Node Package manager

# NPX: Executer. Looks into the node_modules.

temporarily download things and delete afterwards

npx create-react-app

# NVM: Node Version manager.

switch between versions.

npm eject: you can't undo this.

# for:

<input>
<label>
screenreader

# alt:

<img>

import { Fragment } from 'react';

dissolving stitches

# props

always an object

# {props. something} : means it directly came from parent

doesn't belong to me. came from outside.
{something} : mine.

# functions have no memory

```javascript
const increment = () => {
  let count = 0;
  count += 1;
  console.log(count);
};

increment(); //1
increment(); //1
increment(); //1

/// CLOSURES : Variables when function was CREATED
let count = 0;
const increment = () => {
  count += 1;
  console.log(count);
};

increment(); //1
increment(); //1
increment(); //1
```

onauxclick = auxiliary

# all hooks starts with "use" (Same as $ for jQuery)

e.g. useState, useEffect

# we CANNOT call hooks conditionally.

# we CANNT use the hooks inside Function.

in dev tool chrome:
hooks
1 state
2 state
3 state

react doesn't know the name of the hooks, it only cares about the order.

# smart parents, dumb children

make children as generic as possible

<button onClick={props.onClick}Click/>

# class component VS functional component
