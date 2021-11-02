const express = require("express");
const router = express.Router();
const dadosClientes = require("../models/dadosClientes");

router.get("/", async (req, res) => {
  try {
    const clientes = await dadosClientes.find();
    res.status(200).json({ data: clientes });
  } catch (error) {
    res.send(404).json({
      message: error,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const cliente = await dadosClientes.create(req.body);
    res.status(201).json({ data: cliente });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cliente = await dadosClientes.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      cliente,
    });
  } catch (error) {
    res.send(404).json({
      message: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cliente = await dadosClientes.findByIdAndRemove(req.params.id);

    res.status(204).json({
      status: cliente,
    });
  } catch (error) {
    res.send(404).json({
      message: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cliente = await dadosClientes.findById(req.params.id);

    res.status(200).json({
      cliente,
    });
  } catch (error) {
    res.send(404).json({
      message: error,
    });
  }
});

module.exports = router;
