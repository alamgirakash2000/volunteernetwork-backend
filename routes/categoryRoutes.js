import express from "express";
import categoryModel from "../models/categoryModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Request accepted");
});

router.get("/all", async (req, res) => {
  categoryModel.find((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  categoryModel.findById(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  categoryModel.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Successfully added category");
    }
  });
});

export default router;
