import mongoose from "mongoose";

const instance = mongoose.Schema({
  name: String,
  img: String,
  description: String,
  date: Date,
});

export default mongoose.model("categories", instance);
