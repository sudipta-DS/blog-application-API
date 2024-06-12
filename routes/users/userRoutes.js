const express = require("express");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user registered",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "user logged in",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET /api/v1/users/profile/:id
userRouter.get("/profile/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "user registered",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET /api/v1/users
userRouter.get("/api/v1/users", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "get user route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE /api/v1/users/register
userRouter.delete("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "delete user route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// PUT /api/v1/users/register
userRouter.put("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "put user route",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = userRouter;
