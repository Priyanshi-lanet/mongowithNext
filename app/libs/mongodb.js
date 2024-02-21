import mongoose from "mongoose";
import React from "react";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To MongoDb");
  } catch (error) {
    console.log("error for connection", error);
  }
};

export default connectMongoDb;
