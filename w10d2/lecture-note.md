## any chat, game uses web socket.

- XMLHttpRequest: Ajax
  part of the page.
  small messages.
- Request / Response
- Hacked ajax for real time - "Comet"

- De-fecto real time
- still a hack, Ajax never intende for this
- needed a real solution.

- 2008: started working on real solution
- 2010: first browser with we
- 2011 : websocket protocol (official) release -> RFC6455

- on top of http protocol
- all the auth, security (http, oauth)
- encryption is all done by http.

# Libraries

- ws: barebones
- mu websockets: fast, also barebones
- socket.io - the jquery of websockets
  - written back when comet still a thing
  - super easy to use
  - looks a lot like jquery
  - feature: auto reconnect
  - bi directional, low-latency
  - custo events

## HTTP Long polling

- response doesn't have to wait until request is finished. and vice versa.

==

socket io node

# installation

$ npm install socket.io
$ nodemon
const { Server } = require("socket.io")

const io = new Server(8000)

# with websocket: always have to do useEffect

# handshaek by socket.io

# client id: iphemural?

- they don't stick around, it keeps changing
