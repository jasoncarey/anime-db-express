import { Router } from "express";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get('/', authMiddleware, async (req, res) => {
    res.status(200).json({ message: 'Protected route', user: req.user });
});

export default router