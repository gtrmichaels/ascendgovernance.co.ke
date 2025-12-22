# Ascend Governance API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database URL and secrets
```

3. Set up Prisma:
```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to view data
npm run prisma:studio
```

4. Start the server:
```bash
npm run dev
```

The API server will run on `http://localhost:3001`

## API Routes

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/me` - Get current user info

## Database Schema

- **User**: Single table with role (ADMIN, CONSULTANT, USER)
- **ConsultantProfile**: Linked to User for consultants
- **Booking**: Sessions between users and consultants
- **Message**: Communication between users

