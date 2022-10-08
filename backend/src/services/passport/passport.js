import { Strategy, ExtractJwt } from 'passport-jwt';
import { config, underscoreId } from './config';
import { Cashier } from '../../dao/models';

export const applyPassportStrategy = passport => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = config.passport.secret;
  passport.use(
    new Strategy(options, (payload, done) => {
      Cashier.findOne({ user_name: payload.email }, (err, user) => {
        if (err) return done(err, false);
        if (user) {
          return done(null, {
            email: user.email,
            _id: user[underscoreId]
          });
        }
        return done(null, false);
      });
    })
  );
};

/* app.js

  import express from 'express';
import logger from 'winston';
import bodyParser from 'body-parser';
import cors from 'cors';

import passport from 'passport';
import mongoose from 'mongoose';

import { config } from './store/config';
import { applyPassportStrategy } from './store/passport';
import { userController } from './controller';

const app = express();

// Set up CORS
app.use(cors());

// Apply strategy to passport
applyPassportStrategy(passport);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Route
app.use('/', userController);

const { port, mongoDBUri, mongoHostName } = config.env;
app.listen(port, () => {
  logger.info(`Started successfully server at port ${port}`);
  mongoose
    .connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      logger.info(`Conneted to mongoDB at ${mongoHostName}`);
    });
});

*/