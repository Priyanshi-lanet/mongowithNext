import { timestamps } from "mongodb";
import mongoose, { Schema } from "mongoose";
const salesSchema = new Schema(
  {
    items: {
      type: String,
      required: true,
    },
    storeLocation: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    purchaseMethod: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Sales = mongoose.models.Sales || mongoose.model("Sales", salesSchema);
export default Sales;
