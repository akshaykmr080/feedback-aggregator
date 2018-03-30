const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

//connect to mongoose
mongoose.connect(config.mongoURI)
//make sure you execute this file. 
//Requiring it will execute it.
//So, passport will be set up.
require('./models/user');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]

}))

app.use(passport.initialize());
app.use(passport.session())
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server listening on port 5000')
})