const express = require("express");
const app = express();
app.use(express.json());
//Route Imports
const vendor = require("./routes/vendorRoute");
app.use("/", vendor);

module.exports = app;
