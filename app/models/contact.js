import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";
const topicSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
