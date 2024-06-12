const express = require("express");

const categoryRouter = express.Router();

categoryRouter.post("/", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "category registered",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET
categoryRouter.get("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "get category route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE
categoryRouter.delete("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "delete category route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// PUT
categoryRouter.put("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "put category route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = categoryRouter;
