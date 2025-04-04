import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || '')
    } catch (error) {
        throw new Error();
    }
}