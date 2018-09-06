const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const VatRatesSchema = new Schema({
  vatRates: {
    type: Array
  }
});

module.exports = VatRates = mongoose.model("vatRates", VatRatesSchema);
