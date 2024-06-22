import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
    try {
    if (!password) {
        throw new Error('Password is required')
    }
    console.log('password: ', password)
    const hash = await bcrypt.hash(password, SALT_ROUNDS)
    console.log('hash', hash);
    return hash;
    } catch (error) {
        console.error('Error hashing password', error);
        throw new Error('Error hashing password');
    }
}

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
}