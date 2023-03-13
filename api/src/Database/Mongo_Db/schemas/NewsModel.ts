import mongoose from "mongoose";
import { INewsModel } from "../ISchemas/INewsModel";

const newsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
    },
    createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<INewsModel>("News", newsSchema);
