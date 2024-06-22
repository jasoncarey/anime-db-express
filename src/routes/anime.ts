import { Router } from "express";
import { Anime } from '../models/Anime'

const router = Router();

// GET all anime
router.get('/', async (_, res) => {
    try {
        console.info('GET /anime');
        const anime = await Anime.findAll();
        res.json(anime);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
})

// POST a new anime
router.post('/', async (req, res) => {
    try {
        const newAnime = await Anime.create(req.body);
        res.status(201).json(newAnime);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
})

export default router