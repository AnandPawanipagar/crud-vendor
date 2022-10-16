const express = require("express");
const { getAllVendors, createVendor } = require("../controllers/VendorController");
const userRouter = express.Router();
userRouter.route("/vendors").get(getAllVendors);
userRouter.route('/vendor/create-vendor').post(createVendor)
module.exports = userRouter;
