import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  photoUrl: {
    type: String,
  },
  hotmartLink: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Courses", coursesSchema);
