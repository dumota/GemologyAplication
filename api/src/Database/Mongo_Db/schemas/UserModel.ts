import mongoose from "mongoose";
import { IUserModel } from "../ISchemas/IUserModel";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor adicione seu nome"],
      trim: true,
    },
    username: {
      type: String,
      required: true,
      triM: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    photoUrl: {
      type: String,
      default:
        "https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=612x612&w=0&k=20&c=GVYAgYvyLb082gop8rg0XC_wNsu0qupfSLtO7q9wu38=",
    },
    typeUser: {
      type: String,
      default: "User",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUserModel>("User", UserSchema);
