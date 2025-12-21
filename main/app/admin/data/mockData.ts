// Mock data for admin dashboard

export const mockStats = {
  totalUsers: 1247,
  totalConsultants: 89,
  totalBookings: 342,
  totalMessages: 156,
};

export const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'active',
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.j@example.com',
    role: 'User',
    status: 'suspended',
    createdAt: '2024-03-10',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'User',
    status: 'active',
    createdAt: '2024-04-05',
  },
];

export const mockConsultants = [
  {
    id: 1,
    name: 'Dr. Sarah Williams',
    email: 'sarah.williams@example.com',
    specialization: 'Corporate Governance',
    status: 'approved',
    experience: '15 years',
    submittedAt: '2024-01-10',
  },
  {
    id: 2,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    specialization: 'Board Evaluations',
    status: 'pending',
    experience: '12 years',
    submittedAt: '2024-12-15',
  },
  {
    id: 3,
    name: 'Dr. Lisa Anderson',
    email: 'lisa.anderson@example.com',
    specialization: 'Risk Management',
    status: 'approved',
    experience: '20 years',
    submittedAt: '2024-02-01',
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    specialization: 'Compliance',
    status: 'rejected',
    experience: '8 years',
    submittedAt: '2024-11-20',
  },
];

export const mockBookings = [
  {
    id: 1,
    userName: 'John Doe',
    consultantName: 'Dr. Sarah Williams',
    date: '2024-12-20',
    time: '10:00 AM',
    status: 'completed',
    service: 'Board Evaluation',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    consultantName: 'Michael Brown',
    date: '2024-12-22',
    time: '2:00 PM',
    status: 'pending',
    service: 'Governance Training',
  },
  {
    id: 3,
    userName: 'Robert Johnson',
    consultantName: 'Dr. Lisa Anderson',
    date: '2024-12-25',
    time: '11:00 AM',
    status: 'cancelled',
    service: 'Compliance Review',
  },
];

export const mockMessages = [
  {
    id: 1,
    from: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Inquiry about Board Evaluation',
    message: 'I would like to know more about your board evaluation services...',
    read: false,
    date: '2024-12-18',
  },
  {
    id: 2,
    from: 'Jane Smith',
    email: 'jane.smith@example.com',
    subject: 'Consultation Request',
    message: 'We are interested in scheduling a consultation for our board...',
    read: true,
    date: '2024-12-17',
  },
  {
    id: 3,
    from: 'Robert Johnson',
    email: 'robert.j@example.com',
    subject: 'Training Program Information',
    message: 'Could you provide more details about your training programs?',
    read: false,
    date: '2024-12-16',
  },
];

export const mockContent = {
  services: [
    { id: 1, title: 'Board Evaluations', status: 'published', updatedAt: '2024-12-10' },
    { id: 2, title: 'Board Trainings', status: 'published', updatedAt: '2024-12-08' },
    { id: 3, title: 'Secretarial Trainings', status: 'draft', updatedAt: '2024-12-15' },
  ],
  programs: [
    { id: 1, title: 'Governance Essentials', status: 'published', updatedAt: '2024-12-05' },
    { id: 2, title: 'Advanced Board Leadership', status: 'published', updatedAt: '2024-12-03' },
  ],
  blogPosts: [
    { id: 1, title: 'The Future of Board Evaluations', status: 'published', updatedAt: '2024-12-12' },
    { id: 2, title: 'ESG Reporting Standards', status: 'published', updatedAt: '2024-12-10' },
  ],
};

export const mockRecentActivity = [
  { id: 1, action: 'New user registered', user: 'John Doe', time: '2 hours ago' },
  { id: 2, action: 'Consultant approved', user: 'Dr. Sarah Williams', time: '5 hours ago' },
  { id: 3, action: 'Booking completed', user: 'Jane Smith', time: '1 day ago' },
  { id: 4, action: 'Message received', user: 'Robert Johnson', time: '2 days ago' },
];

