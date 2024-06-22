import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
}