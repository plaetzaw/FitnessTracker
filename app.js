const express = require("express");
const app = express();
// const session = require('express-session')
// const cookie = require('cookie-parser')
// const SequelizeStore = require('sequelize-session-store')(session)

// app.use(cookie());
// var myStore = new SequelizeStore({
//     db: connection
// })
// app.use(session({
//   secret: 'keoaubheiubaibeivaabljk',
//   cookie: {secure: true, cookie: {maxAge: 24*60*60*1000}},
//   store: myStore,
//   resave: false,
//   proxy: true
// }));

const http = require('http').Server(app)
const io = require("socket.io")(http);
let db = require("./models");

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
app.use(require("./routes/chat"));


io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

// app.listen(3000, () => {
//   console.log("Listening on 3000");
// });
http.listen(3000, () => {
  console.log("Listening on 3000");
});