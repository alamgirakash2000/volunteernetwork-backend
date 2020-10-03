import express from "express";
import volunteersModel from "../models/volunteerModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Request accepted");
});

router.get("/all", async (req, res) => {
  volunteersModel.find((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get("/:email", async (req, res) => {
  const email = req.params.email;

  volunteersModel.find({ email: email }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  volunteersModel.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Successfully registerd");
    }
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  let work;

  await volunteersModel.findById(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      work = data;
    }
  });

  await work.remove((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Successfully deleted");
    }
  });
});

export default router;
