import mongoose from "mongoose";

const instance = mongoose.Schema({
  username: String,
  email: String,
  category: String,
  date: Date,
  description: String,
});

export default mongoose.model("volunteers", instance);
