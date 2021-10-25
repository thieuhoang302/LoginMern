const { DB_USERNAME} = require("./config");

module.exports = {
  MongoURI: `mongodb://localhost/${DB_USERNAME}`
};
