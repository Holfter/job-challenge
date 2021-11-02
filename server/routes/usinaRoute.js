const express = require("express");
const router = express.Router();
const dadosUsina = require("../models/dadosUsina");

router.get("/", async (req, res) => {
  try {
    const usina = await dadosUsina.find();
    res.status(200).json({ data: usina });
  } catch (error) {
    res.send(404).json({
      message: error,
    });
  }
});

module.exports = router;
