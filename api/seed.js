import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Get test credentials from environment variables
  const adminEmail = process.env.TEST_ADMIN_EMAIL || 'admin@test.com';
  const adminPassword = process.env.TEST_ADMIN_PASSWORD || 'password123';
  const consultantEmail = process.env.TEST_CONSULTANT_EMAIL || 'consultant@test.com';
  const consultantPassword = process.env.TEST_CONSULTANT_PASSWORD || 'password123';
  const userEmail = process.env.TEST_USER_EMAIL || 'user@test.com';
  const userPassword = process.env.TEST_USER_PASSWORD || 'password123';

  // Hash password for all users
  const adminHashedPassword = await bcrypt.hash(adminPassword, 10);
  const consultantHashedPassword = await bcrypt.hash(consultantPassword, 10);
  const userHashedPassword = await bcrypt.hash(userPassword, 10);

  // Create ADMIN user
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: adminHashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
    },
  });
  console.log('✅ Created ADMIN user:', admin.email);

  // Create CONSULTANT user
  const consultant = await prisma.user.upsert({
    where: { email: consultantEmail },
    update: {},
    create: {
      email: consultantEmail,
      password: consultantHashedPassword,
      firstName: 'Consultant',
      lastName: 'User',
      role: 'CONSULTANT',
      consultantProfile: {
        create: {
          bio: 'Experienced governance consultant',
          status: 'APPROVED',
        },
      },
    },
  });
  console.log('✅ Created CONSULTANT user:', consultant.email);

  // Create USER
  const user = await prisma.user.upsert({
    where: { email: userEmail },
    update: {},
    create: {
      email: userEmail,
      password: userHashedPassword,
      firstName: 'Regular',
      lastName: 'User',
      role: 'USER',
    },
  });
  console.log('✅ Created USER:', user.email);

  console.log('\n🎉 Seeding completed!');
  console.log('\nTest credentials:');
  console.log(`ADMIN: ${adminEmail} / ${adminPassword}`);
  console.log(`CONSULTANT: ${consultantEmail} / ${consultantPassword}`);
  console.log(`USER: ${userEmail} / ${userPassword}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


