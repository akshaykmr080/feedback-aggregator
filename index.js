const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const path = require('path');


//connect to mongoose
mongoose.connect(config.mongoURI)


//make sure you execute this file. 
//Requiring it will execute it.
//So, passport will be set up.
require('./models/user');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const billing = require('./routes/billing');

const app = express();

app.use(bodyParser.json())
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]

}))

app.use(passport.initialize());
app.use(passport.session())

billing(app);
authRoutes(app);

//only supposed to be run when in production mode on heroku
if(process.env.NODE_ENV == 'production') {
    //Express will serve up production assests like main.js or main.css
    app.use(express.static('client/build'))

    //Express will serve up index.html if it does not find a route
    const path = app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server listening on port 5000')
})