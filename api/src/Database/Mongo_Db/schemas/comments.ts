import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    post_id: mongoose.Types.ObjectId,
    post_user_id: mongoose.Types.ObjectId,
    content: { type: String, required: true },
    replyCM: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
    reply_user: { type: mongoose.Types.ObjectId, ref: "user" },
    comment_root: { type: mongoose.Types.ObjectId, ref: "comment" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);
