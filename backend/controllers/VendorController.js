const Vendor = require("../models/vendorModel");

exports.createVendor = async (req, res) => {
  const vendor = await Vendor.create(req.body);
  res.status(201).json({
    success: true,
    vendor,
  });
};

exports.getAllVendors = (req, res) => {
  res.json({ message: "Route is working fine" });
};
