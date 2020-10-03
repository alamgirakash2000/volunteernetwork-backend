import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import cors from "cors";

import volunteersRoute from "./routes/volunteersRoute.js";
import categoryRoute from "./routes/categoryRoutes.js";

// app config
const app = express();
const port = process.env.PORT || 5000;

// Middlewars
app.use(express.json());
app.use(cors());
app.use("/api/volunteers", volunteersRoute);
app.use("/api/categories", categoryRoute);

// DB config
const connectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ninue.mongodb.net/volunteer-network?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB is connected");
});

// Routes
app.get("/", (req, res) => res.send("The volunteer server is running"));

// listen
app.listen(port, () => console.log(`The app is running on port ${port}`));
