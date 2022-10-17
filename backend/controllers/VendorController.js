const Vendor = require("../models/vendorModel");
// creating vendor
exports.createVendor = async (req, res) => {
  const vendor = await Vendor.create(req.body);
  res.status(201).json({
    success: true,
    vendor,
  });
};
// get all vendors
exports.getAllVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.json({ success: true, vendors });
};

// update vendor
exports.updateVendor = async (req, res) => {
  let vendor = await Vendor.findById(req.params.id);
  if (!vendor) {
    return res.status(500).json({
      success: false,
      message: "Vendor not found",
    });
  }

  vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    vendor,
  });
};
