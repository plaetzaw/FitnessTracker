const express = require("express");
const app = express();
let db = require('./models')

app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(require('./routes/profilePage'))
app.use(require("./routes/"));
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/foodexercise"));
app.use(require("./routes/tracker"));
app.use(require("./routes/aboutus"));
app.use(require("./routes/profile"));

app.listen(3000, () => {
  console.log("Listening on 3000");
});
