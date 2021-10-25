const rateLimit = require("express-rate-limit");


exports.registerLimiter = rateLimit({
  windowMs: 5 , // 5s window
  max: 5, // start blocking after 5 requests
  message:
    "Too many accounts Registered from this device, please try again in a few second"
});

exports.loginLimiter = rateLimit({
  windowMs: 60 , // 1 minute window
  max: 10, // start blocking after 5 requests
  message:
    "Too many Login attempts from this device, please try again in an minutes"
});