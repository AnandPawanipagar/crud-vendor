const mongoose = require("mongoose");
const vendorSchema = mongoose.Schema({
  vendorName: {
    type: String,
    required: [true, " Please enter vendor name"],
    trim: true,
  },
  accountNumber: {
    type: Number,
    required: [true, "Please enter Bank account number"],
    minLength: [7, "Account number must be more then 7 digits"],
    maxLength: [17, "Account Number can not exceed 17 digits "],
  },
  bankName: {
    type: String,
    required: [true, "Please enter bank name"],
  },
});
module.exports=mongoose.model("vendor",vendorSchema)
