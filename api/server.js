// Load environment variables FIRST, before any other imports
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import consultantRoutes from './routes/consultants.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware: Custom CORS (echo incoming origin to avoid localhost fallback)
const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://ascendgovernance.co.ke',
  'https://ascendgovernance.vercel.app'
];

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

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

