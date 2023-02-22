import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  typeAnnoucement: {
    type: String,
  },
  name: {
    type: String,
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
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Announcement", announcementSchema);
