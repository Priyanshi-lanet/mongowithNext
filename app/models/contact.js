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
  { timestamps: true } // Move timestamps outside of the schema definition
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
// const contactSchema = new mongoose.Schema(
//   {
//     username:
//     String,

//     ,
//     email: {
//        String,

//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     message: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamp: true,
//   }
// );

// const Contact =
//   mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// export default Contact;
