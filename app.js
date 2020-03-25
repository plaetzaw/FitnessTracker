const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
let db = require("./models");
const session = require("express-session");
const cookie = require("cookie-parser");
app.use(cookie());

app.use(
  session({
    secret: "cookie",
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

// let auth = (req, res, next) => {
//   if (req.session.userid) {
//     next();
//   }
//   else {
//     res.redirect('/login')
//   }
// }
app.use(require("./routes/profilePage"));
app.use(require("./routes/"));
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/foodexercise"));
app.use(require("./routes/tracker"));
app.use(require("./routes/aboutus"));
app.use(require("./routes/settings"));
app.use(require("./routes/chat"));
app.use(require("./routes/logout"));

io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});


http.listen(3000, () => {
  console.log("Listening on 3000");
});
