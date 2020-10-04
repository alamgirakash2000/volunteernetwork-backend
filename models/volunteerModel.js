import mongoose from "mongoose";

const instance = mongoose.Schema({
  username: String,
  email: String,
  category: Object,
  date: Date,
  img: String,
  description: String,
});

export default mongoose.model("volunteers", instance);
