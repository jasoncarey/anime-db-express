import { Request, Response } from 'express';

export const verifyUser = (req: Request, res: Response) => {
    const userId = req.params.id;
    const authenticatedUserId = (req.user as { id: string }).id;
    if (userId !== authenticatedUserId) {
        return res.status(403).json({ message: 'Forbidden' });
    }
};