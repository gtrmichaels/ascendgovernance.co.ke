import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '../routes/auth.js';
import consultantRoutes from '../routes/consultants.js';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);
app.use('/consultants', consultantRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
