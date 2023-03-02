import { Router } from "express";
import { booksRouter } from "../components/books/index.js";
import { uploadsRouter } from "../components/uploads/index.js";
import usersRouter from "../components/user/index.js";

const router = Router();

// Test Route
router.get("/health", (req, res) => {
  res.json("Server's healthy and running ⚡!");
});

router.use("/books", booksRouter);
router.use("/uploads", uploadsRouter);
router.use("/users", usersRouter);
export default router;
