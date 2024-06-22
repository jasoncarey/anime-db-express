import { Router } from "express";
import { Anime } from '../models/Anime'
import { handleError } from "../utils/errorHandler";

const router = Router();

router.get('/', async (_, res) => {
    try {
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

router.post('/', async (req, res) => {
    try {
        const newAnime = await Anime.create(req.body);
        res.status(201).json(newAnime);
    } catch (error) {
        handleError(res, error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const anime = await Anime.findByPk(req.params.id);
        if (anime) {
            res.json(anime);
        } else {
            res.status(404).json({ message: 'Anime not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const anime = await Anime.findByPk(req.params.id);
        if (anime) {
            await anime.update(req.body);
            res.json(anime);
        } else {
            res.status(404).json({ message: 'Anime not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const anime = await Anime.findByPk(req.params.id);
        if (anime) {
            await anime.destroy();
            res.json({ message: 'Anime deleted' });
        } else {
            res.status(404).json({ message: 'Anime not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
})

export default router

