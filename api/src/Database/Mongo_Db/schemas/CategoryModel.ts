import mongoose from "mongoose";
import { ICategoryModel } from "../ISchemas/ICategoryModel";
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your category"],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICategoryModel>("Categories", categorySchema);
