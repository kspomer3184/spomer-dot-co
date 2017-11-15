const dotenv = require('dotenv');
const cfg = {};

if (process.env.NODE_ENV !== 'test') {
  dotenv.config({path: '.env'});
} else {
  dotenv.config({path: '.env.example', silent: true});
}

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
cfg.accountSid = "AC24b3c0ad866586038e4f5ca818ae30ed";
cfg.authToken = "3bab3d6d5bef27855cfb5bada3c39346";

cfg.twimlAppSid = "AP8d4c676c7f9a77e243650794777cdc8a";
cfg.callerId = "+14079019282";

// Export configuration object
module.exports = cfg;
