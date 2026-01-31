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
const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://ascendgovernance.co.ke',
  'https://ascendgovernance.vercel.app'
];

// QUICK DEBUG MIDDLEWARE: Echo origin and handle OPTIONS preflight explicitly.
// This is temporary — remove once CORS is confirmed working in production.
app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log('[CORS-DEBUG] origin header:', origin, 'FRONTEND_URL=', process.env.FRONTEND_URL);
  if (origin) {
    // Always echo the incoming origin for testing purposes
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  }
  // Handle preflight quickly
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(cors({
  origin: function(origin, callback) {
    console.log('[CORS] incoming request origin:', origin);
    // Allow requests with no origin (e.g., curl, mobile apps)
    if (!origin) {
      console.log('[CORS] no origin header — allowing');
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      console.log('[CORS] origin allowed:', origin);
      return callback(null, true);
    }
    // Not in allowlist — reject but log for debugging
    console.warn('[CORS] origin blocked:', origin, 'allowed:', allowedOrigins);
    return callback(null, false);
  },
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
