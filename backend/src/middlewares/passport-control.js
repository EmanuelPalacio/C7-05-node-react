const passport = require('passport');
const passportJWT = require('passport-jwt'),
      JWTStrategy = passportJWT.Strategy,
      ExtractJWT = passportJWT.ExtractJwt,
      Cashier = require('../services/cashier/cashierService.service'),
      cashierService = new Cashier();
const { JWT_SECRET } = require('../config/globals');

// Jwt Strategy
passport.use(new JWTStrategy( {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}, (jwt_payload, done) => {
  cashierService.findUserById(jwt_payload.id).then( cashier => {
    return done(null,cashier);
  }).catch(err => {
    return done(err,false,{
      message: 'Token inválido.'
    })
  })
}))

module.exports = passport;