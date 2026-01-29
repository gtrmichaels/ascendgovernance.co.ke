import express from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify admin token
const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });

    if (!user || user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// GET /consultants - Get all consultants (admin only)
router.get('/', verifyAdmin, async (req, res) => {
  try {
    const consultants = await prisma.consultantProfile.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            organization: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formattedConsultants = consultants.map(profile => ({
      id: profile.id,
      userId: profile.userId,
      name: `${profile.user.firstName} ${profile.user.lastName}`,
      email: profile.user.email,
      phone: profile.user.phone,
      organization: profile.user.organization,
      linkedinUrl: profile.linkedinUrl,
      bio: profile.bio,
      qualifications: profile.qualifications,
      expertise: profile.expertise ? JSON.parse(profile.expertise) : [],
      status: profile.status,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt
    }));

    res.json({ consultants: formattedConsultants });
  } catch (error) {
    console.error('Get consultants error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /consultants/:id - Get single consultant (admin only)
router.get('/:id', verifyAdmin, async (req, res) => {
  try {
    const consultant = await prisma.consultantProfile.findUnique({
      where: { id: req.params.id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            organization: true,
            createdAt: true
          }
        }
      }
    });

    if (!consultant) {
      return res.status(404).json({ error: 'Consultant not found' });
    }

    const formattedConsultant = {
      id: consultant.id,
      userId: consultant.userId,
      name: `${consultant.user.firstName} ${consultant.user.lastName}`,
      email: consultant.user.email,
      phone: consultant.user.phone,
      organization: consultant.user.organization,
      linkedinUrl: consultant.linkedinUrl,
      bio: consultant.bio,
      qualifications: consultant.qualifications,
      expertise: consultant.expertise ? JSON.parse(consultant.expertise) : [],
      status: consultant.status,
      createdAt: consultant.createdAt,
      updatedAt: consultant.updatedAt
    };

    res.json({ consultant: formattedConsultant });
  } catch (error) {
    console.error('Get consultant error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH /consultants/:id/status - Update consultant status (admin only)
router.patch('/:id/status', verifyAdmin, async (req, res) => {
  try {
    const { status } = req.body;

    if (!['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be PENDING, APPROVED, or REJECTED' });
    }

    const consultant = await prisma.consultantProfile.findUnique({
      where: { id: req.params.id }
    });

    if (!consultant) {
      return res.status(404).json({ error: 'Consultant not found' });
    }

    const updatedConsultant = await prisma.consultantProfile.update({
      where: { id: req.params.id },
      data: { status },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            organization: true
          }
        }
      }
    });

    const formattedConsultant = {
      id: updatedConsultant.id,
      userId: updatedConsultant.userId,
      name: `${updatedConsultant.user.firstName} ${updatedConsultant.user.lastName}`,
      email: updatedConsultant.user.email,
      status: updatedConsultant.status,
      bio: updatedConsultant.bio,
      qualifications: updatedConsultant.qualifications,
      expertise: updatedConsultant.expertise ? JSON.parse(updatedConsultant.expertise) : []
    };

    res.json({ consultant: formattedConsultant, message: `Consultant ${status.toLowerCase()} successfully` });
  } catch (error) {
    console.error('Update consultant status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;


