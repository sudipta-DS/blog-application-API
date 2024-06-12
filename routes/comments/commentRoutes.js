const express = require("express");

const commentRouter = express.Router();

commentRouter.post("/", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "comments registered",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET
commentRouter.get("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "get comments route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE
commentRouter.delete("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "delete comments route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// PUT
commentRouter.put("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "put comments route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = commentRouter;
