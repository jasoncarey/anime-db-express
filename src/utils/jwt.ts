import jwt from 'jsonwebtoken';

const SECRET_KEY = 'secret-key';

export const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
}

export const verifyToken = (token: string): string | jwt.JwtPayload => {
    return jwt.verify(token, SECRET_KEY);
};
