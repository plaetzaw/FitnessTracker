const express = require("express");
const app = express();
let db = require('./models')

app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(require('./routes/profilePage'))
app.use(require("./routes/"));
app.use(require("./routes/login"));
app.use(require("./routes/register"));

app.listen(3000, () => {
  console.log("Listening on 3000");
});
