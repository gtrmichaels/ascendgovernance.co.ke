import serverless from 'serverless-http';
import dotenv from 'dotenv';
console.time('[api] module import');
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import consultantRoutes from './routes/consultants.js';

console.time('[api] express init');
const app = express();
console.timeEnd('[api] express init');

// Middleware
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'https://ascendgovernance.co.ke',
    'https://ascendgovernance.vercel.app'
  ],
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
console.timeEnd('[api] module import');

// Wrap handler to log per-invocation timings
const handler = serverless(app);
export default async function (req, res) {
  console.time('[api] invocation');
  try {
    await handler(req, res);
  } finally {
    console.timeEnd('[api] invocation');
  }
}
