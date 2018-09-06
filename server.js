const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const vatRates = require("./routes/api/vatRates");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use Routes
app.use("/api/vatRates", vatRates);

const port = 4300;
app.listen(port, () => console.log("Server running on port " + port));
