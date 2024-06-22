import { Router } from "express";
import { User } from '../models/User'
import { handleError } from "../utils/errorHandler";
import { comparePasswords } from "../utils/hashUtils";

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password_hash: password });
        res.status(201).json(newUser);
    } catch (error) {
        handleError(res, error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

        const isMatch = await comparePasswords(password, user.password_hash);
        if (!isMatch) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

        // Implement JWT token generation here
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        handleError(res, error);
    }
});

export default router