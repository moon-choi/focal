const app = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
const port = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("it works!");
  //res.render("filename") //
});

app.get("/homepage", (req, res) => {
  const templateVars = { myname: "LoveJ" };
  res.render("songs_index", templateVars);
});

//want to send html
app.get("/test", (req, res) => {
  res.send("<html><h1>hello there</h1></html>");
});

//serve a page with a form
app.get("/songs/new", (req, res) => {
  res.render("song_new");
});

//endpoint to receive a post request / data to add.
app.post("/songs", (req, res) => {
  let mybody = req.body;
  console.log(`body from form: ${mybody}`);
  res.send("it workred");
});

app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
