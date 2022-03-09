import express from "express";

const router = express.Router();
router.get("/thangNon", (req, res) => res.json("hello thằng nồn"));

export default router;
