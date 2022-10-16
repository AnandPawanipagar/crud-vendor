const express = require("express");
const { getAllVendors } = require("../controllers/VendorController");
const userRouter = express.Router();
userRouter.route("/vendors").get(getAllVendors);

module.exports = userRouter;
