const express = require("express");
const app = express();
let db = require('./models')
const session = require('express-session')
const cookie = require('cookie-parser')
app.use(cookie());

app.use(session({
  secret: 'cookie',
  cookie: {secure: false, maxAge: 24*60*60*1000}
}))

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(require("./routes/profilePage"));
app.use(require("./routes/"));
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/foodexercise"));
app.use(require("./routes/tracker"));
app.use(require("./routes/aboutus"));
app.use(require("./routes/settings"));

app.listen(3000, () => {
  console.log("Listening on 3000");
});
