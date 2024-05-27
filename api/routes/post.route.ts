import express from "express";

const router = express.Router();

router.get("/post", (req, res) => {
    console.log("router works!");
})

export default router;