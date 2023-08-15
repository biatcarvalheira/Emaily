const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require ('./config/keys');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use (
    cookieSession({
      maxAge: 30 * 24 * 60 * 60* 1000,
      keys: [keys.cookieKey]
    })
  );

app.use(passport.initialize());
app.use(passport.session());

require ('./routes/authRoutes')(app);


const port = process.env.PORT || 3000;  // Use the provided port or 3000 as a fallback

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
