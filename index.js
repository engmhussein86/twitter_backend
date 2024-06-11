import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tweetsRouter from './routes/tweets.js';
import cors from 'cors';
import morgan from "morgan"

// env variables && connect to MongoDB
dotenv.config();
mongoose.connect(process.env.ATLAS_URI);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"))
app.use(express.json());
app.use('/tweets', tweetsRouter);
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));