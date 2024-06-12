const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/users/userRoutes");
const postRoutes = require("./routes/posts/postRoutes");
const commentRoutes = require("./routes/comments/commentRoutes");
const categoryRoutes = require("./routes/categories/categoryRoutes");

const app = express();

const PORT = process.env.PORT || 9000;

dotenv.config();

// users route

// POST /api/v1/users/register
app.use("/api/v1/users", userRoutes);

// posts route

// POST /api/v1/posts
app.use("/api/v1/posts", postRoutes);

// comments route
// POST /api/v1/comments
app.use("/api/v1/comments", commentRoutes);
// categories route

// POST /api/v1/categories
app.use("/api/v1/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
  dbConnect();
});
