import moongoose from "mongoose";
import { IPostModel } from "../ISchemas/IPostModel";

const postSchema = new moongoose.Schema(
  {
    user: { type: moongoose.Types.ObjectId, ref: "User" },
    title: {
      type: String,
      require: true,
      trim: true,
      minLength: 10,
      maxLength: 50,
    },
    content: {
      type: String,
      require: true,
      minLength: 6,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      minLength: 50,
      maxLength: 200,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    category: { type: moongoose.Types.ObjectId, ref: "Categories" },
    likes: [{ type: moongoose.Types.ObjectId, ref: "User" }],
    status: {
      type: Boolean,
      default: false,
    },
    avaliation: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default moongoose.model<IPostModel>("Post", postSchema);
