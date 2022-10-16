const Vendor = require("../models/vendorModel");

exports.createVendor = async (req, res,) => {
  const vendor = await Vendor.create(req.body);
  res.status(201).json({
    success: true,
    vendor,
  });
};

exports.getAllVendors = async(req, res) => {
  const vendors=await Vendor.find();
  res.json({success:true, vendors})
};
