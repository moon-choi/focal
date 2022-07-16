const express = require("express"); //express calls 'server' 'app'
const morgan = require("morgan");
const port = 3001;

//create the express server/app
const app = express();

//middleware
// app.use((request, response, next) => {
//   console.log(`incoming ${request.method} for ${request.url}`);
//   request.crimeBoss = "boba fett";
//   next(); //callback.

//   //we got trapped in this middleware.. and server is waiting for a response. this is async..so express isn't sure when we are done. so we have to give 'next'
//   //next is a function, not an object.
// });

//Andy's favourite middleware
app.use(morgan("dev")); //best logger middleware..
// const morganMiddleWare = morgan("dev"); //dev option.
// app.use(morganMiddleWare);

//TWO END POINTS.
//GET /about
app.get("/about", (request, response) => {
  response.send("this is the about page");
  console.log(request.crimeBoss);
}); //instead of request.method === GET.... simply app.get
// request.method; // GET
// request.url; // about
//GET /product
app.get("/product", (request, response) => {
  response.send("this is the product page");
});

//tell the express app to listen on the port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

//catchall endpoint (wildcard)
//catchall has to be at the bottom, if you put it at the top it will catch everything.
//if we get any type of request,
app.get("*", (request, response) => {
  response.status(500);
  return response.send("my custom 500 page"); //to stop javascript

  // response.status(404).send("my custom 404 age"); //chaining
});
