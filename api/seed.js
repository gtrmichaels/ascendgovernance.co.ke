import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hash password for all users
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create ADMIN user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@test.com' },
    update: {},
    create: {
      email: 'admin@test.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
    },
  });
  console.log('✅ Created ADMIN user:', admin.email);

  // Create CONSULTANT user
  const consultant = await prisma.user.upsert({
    where: { email: 'consultant@test.com' },
    update: {},
    create: {
      email: 'consultant@test.com',
      password: hashedPassword,
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
    where: { email: 'user@test.com' },
    update: {},
    create: {
      email: 'user@test.com',
      password: hashedPassword,
      firstName: 'Regular',
      lastName: 'User',
      role: 'USER',
    },
  });
  console.log('✅ Created USER:', user.email);

  console.log('\n🎉 Seeding completed!');
  console.log('\nTest credentials:');
  console.log('ADMIN: admin@test.com / password123');
  console.log('CONSULTANT: consultant@test.com / password123');
  console.log('USER: user@test.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

