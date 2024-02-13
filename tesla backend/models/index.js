const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.car_details = require("./car.model.js")(mongoose);
console.log(dbConfig)
module.exports = db;
