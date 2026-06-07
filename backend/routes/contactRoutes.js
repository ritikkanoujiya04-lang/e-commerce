const express = require("express");

const router = express.Router();

const Contact =
  require("../models/Contact");

// ADD MESSAGE

router.post(
  "/",
  async (req, res) => {

    try {

      const contact =
        new Contact(req.body);

      await contact.save();

      res.status(201).json({
        message:
          "Message Sent Successfully",
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

// GET ALL MESSAGES

router.get(
  "/",
  async (req, res) => {

    try {

      const contacts =
        await Contact.find().sort({
          createdAt: -1,
        });

      res.json(contacts);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

module.exports = router;