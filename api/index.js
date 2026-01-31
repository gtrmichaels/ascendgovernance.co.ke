import serverless from 'serverless-http';
import dotenv from 'dotenv';
console.time('[api] module import');
dotenv.config();

import express from 'express';
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

// CORS: Echo incoming origin and handle preflight
// (Removing cors() package to avoid conflicts and simplify)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log('[CORS] incoming origin:', origin, 'FRONTEND_URL env:', process.env.FRONTEND_URL);
  
  if (origin) {
    // Check if origin is allowed
    if (allowedOrigins.includes(origin) || 
        origin === 'https://ascendgovernance.vercel.app' || 
        origin === 'https://ascendgovernance.co.ke') {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
      console.log('[CORS] origin ALLOWED:', origin);
    } else {
      console.warn('[CORS] origin BLOCKED:', origin);
    }
  }
  
  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

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
