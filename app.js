const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/profilePage'))

app.listen(3000, () => {
  console.log('Listening on 3000');
});
