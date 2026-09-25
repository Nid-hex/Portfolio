export const techStack = [
  { name: 'React', icon: 'Atom' },
  { name: 'Next.js', icon: 'Triangle' },
  { name: 'Node.js', icon: 'Hexagon' },
  { name: 'Express', icon: 'Server' },
  { name: 'Python', icon: 'Code' },
  { name: 'TypeScript', icon: 'FileCode' },
  { name: 'Flutter', icon: 'Smartphone' },
  { name: 'Tailwind', icon: 'Wind' },
  { name: 'Redis', icon: 'Database' },
  { name: 'MongoDB', icon: 'Leaf' },
  { name: 'Git', icon: 'GitBranch' },
  { name: 'Linux', icon: 'Terminal' },
];

export const services = [
  {
    icon: 'Figma',
    title: 'UX & UI Design',
    desc: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    icon: 'Smartphone',
    title: 'Web & Mobile App Development',
    desc: 'Transforming ideas into exceptional mobile and web experiences.',
  },
  {
    icon: 'Palette',
    title: 'Design & Creative',
    desc: 'Crafting visually stunning digital experiences that connect with your audience.',
  },
  {
    icon: 'Server',
    title: 'Full-Stack Development',
    desc: 'Modern technology stacks and robust, scalable backend architectures.',
  },
];

export const projects = [
  {
    name: 'Form2Mail',
    category: 'Full Stack',
    desc: 'A drop-in form backend that routes submissions straight to your inbox — no server required.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    status: 'Live',
    repo: 'vercel/next.js',
  },
  {
    name: 'Auxify',
    category: 'Mobile',
    desc: 'A collaborative listening app where friends queue tracks together in real time.',
    tech: ['Flutter', 'Firebase', 'WebSockets'],
    status: 'Beta Version',
    repo: 'flutter/flutter',
  },
  {
    name: 'NexGEN IRCTC',
    category: 'Full Stack',
    desc: 'A modernized train-booking concept with faster search and a cleaner checkout flow.',
    tech: ['React', 'Node.js', 'MySQL'],
    status: 'GitHub',
    repo: 'facebook/react',
  },
  {
    name: 'urlShortner',
    category: 'Backend',
    desc: 'A high-throughput URL shortener with rate limiting and click analytics.',
    tech: ['Node.js', 'Redis', 'REST API'],
    status: 'GitHub',
    repo: 'expressjs/express',
  },
  {
    name: 'Tournament Hub',
    category: 'Full Stack',
    desc: 'Real-time esports tournament tracking with player registration and live leaderboards.',
    tech: ['Next.js', 'MongoDB', 'REST API'],
    status: 'Live',
    repo: 'vercel/next.js',
  },
  {
    name: 'AuthCore',
    category: 'Backend',
    desc: 'A reusable OTP + JWT authentication service with password reset flows built in.',
    tech: ['Node.js', 'JWT', 'OAuth'],
    status: 'GitHub',
    repo: 'expressjs/express',
  },
];

export const experience = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Anvera Esport',
    location: 'Remote',
    period: '2024 - Present',
    points: [
      'Developed a scalable esports tournament platform using Next.js, Node.js, MongoDB, and REST APIs supporting real-time tournament workflows and player management.',
      'Implemented real-time tournament tracking, player registration, and leaderboard systems, improving match management efficiency for competitive gaming events.',
      'Optimized server-side rendering and responsive UI components, improving application performance and user experience across devices.',
    ],
  },
  {
    role: 'Freelance Backend Developer',
    company: 'TktHive',
    location: 'Remote',
    period: '2023 - 2024',
    points: [
      'Developed scalable backend architecture using Node.js, MongoDB, and Redis with OTP authentication and password-reset flows.',
      'Built and documented REST APIs consumed by web and mobile clients, with rate limiting to protect core services.',
      'Collaborated with the product team to translate feature requests into shipped, tested backend endpoints.',
    ],
  },
];

export const skills = {
  Languages: ['Python', 'C/C++', 'SQL', 'Go', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  'Frameworks & Libraries': ['React Native', 'Next.js', 'Flutter', 'React.js', 'Node.js', 'Express', 'Tailwind CSS'],
  'Backend & Databases': ['REST APIs', 'Redis', 'MongoDB', 'MySQL', 'JWT', 'OAuth', 'Rate Limiting', 'Google Sheets API'],
  'Tools & Concepts': ['Git', 'Docker', 'Linux', 'DBeaver', 'Postman', 'Figma', 'CI/CD', 'Asynchronous Prog.'],
};

export const skillIcons = {
  Languages: 'Code2',
  'Frameworks & Libraries': 'Layers',
  'Backend & Databases': 'Database',
  'Tools & Concepts': 'Settings2',
};

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    badge: 'CGPA: 8.26',
    school: 'Manipal University Jaipur',
    period: '2025 – 2027',
    desc: 'Advanced topics in Software Engineering, Cloud Architectures, and Database Systems.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    badge: 'CGPA: 7.17',
    school: 'Lovely Professional University',
    period: '2022 – 2025',
    desc: 'Focus on Data Structures, Algorithms, OOPs, and Web Development.',
  },
  {
    degree: 'Intermediate',
    badge: 'Percentage: 72%',
    school: 'Dhwarka High School',
    period: '2020 – 2022',
    desc: 'Science stream with Core Mathematics and Physics.',
  },
];

export const achievements = [
  {
    title: 'National Ideathon Recognition',
    org: 'SBI Foundation · IIT Delhi',
    desc: 'Received national recognition at the College Youth Ideathon (CYI) for innovative software solutions.',
    dark: false,
  },
  {
    title: 'Winner - Web-E-Stan 4.0 Hackathon',
    org: 'School of CS&E, LPU',
    desc: 'Won first place for designing and implementing a farmer-to-consumer digital marketplace.',
    dark: false,
  },
  {
    title: 'Winner - Inter-college Hackathon',
    org: 'PCTE Group of Institutes',
    desc: 'Secured first place for high-speed full-stack application development in a competitive environment.',
    dark: false,
  },
  {
    title: 'Student Organization Head',
    org: 'InnovXus Club',
    desc: "Led LPU's computer science coding club, organizing hackathons and workshops for 1,500+ students.",
    dark: true,
  },
];

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];
