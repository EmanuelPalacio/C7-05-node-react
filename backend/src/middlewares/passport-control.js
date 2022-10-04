const passport = require('passport'),
      Strategy = require('passport-local').Strategy,
      Cashier = require('../dao/models')

// Local Strategy
passport.use(new Strategy( (username, password, done) => {
  Cashier.findOne({username: username}, (err, user) => {

    // If any error
    if (err) { return done(err) }

    if (!user) {
      return done(null, false, {
        message: 'No user found.'
      })
    }

    user.login(password).then(() => {
       return done(null, user)
    }).catch((err) => {
      return done(err, false, {
        message: 'Password not matched.'
      })
    })
  })
}))

module.exports = passport;