import { Router } from "express";
import { User } from '../models/User'
import { handleError } from "../utils/errorHandler";

const router = Router();

router.get('/', async (_, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        handleError(res, error);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        handleError(res, error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
});

router.get('/:id/watchlist', async (req, res) => {});
router.post('/:id/watchlist', async (req, res) => {});
router.delete('/:id/watchlist/:animeId', async (req, res) => {});

export default router