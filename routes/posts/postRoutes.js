const express = require("express");

const postRouter = express.Router();

postRouter.post("/", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "post registered",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET
postRouter.get("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "get post route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET
postRouter.get("/", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "get post route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE /:id
postRouter.delete("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "delete post route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// PUT /:id
postRouter.put("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "put posts route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = postRouter;
