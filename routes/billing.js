const configKeys = require('../config/keys');
const stripe = require('stripe')(configKeys.stripeSecretKey)
const loginMiddleware = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe', loginMiddleware, async (req, res) => {

       const charge = await stripe.charges.create({
           amount: 500,
           currency: 'usd',
           description: '$5 for 5 credits',
           source: req.body.id
       })

       //console.log(charge)

       req.user.credits += 5;
       const user = await req.user.save()

       res.send(user);
    })
}