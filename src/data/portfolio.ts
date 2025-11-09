import type { Experience, Project, Education, Skill } from '../types';

export const personalInfo = {
  name: 'Vartika',
  title: 'Java Developer & AI Enthusiast',
  email: 'vartikasardana@gmail.com',
  phone: '+91 8847320072',
  location: 'Amritsar, India',
  github: 'https://github.com/vvrtika',
  linkedin: 'https://www.linkedin.com/in/vartika-b541a3223',
  leetcode: 'https://leetcode.com/vvrtika',
  bio: 'Passionate software developer with expertise in Java, Spring Boot, and modern web technologies. Solved 450+ DSA problems and building scalable full-stack applications.',
};

export const experiences: Experience[] = [];

export const projects: Project[] = [
  {
    title: 'Job Portal Web App',
    description: 'A comprehensive web application that connects job seekers and employers, providing features like job postings, application management, and user authentication.',
    technologies: ['Java', 'Spring Framework 6', 'Spring Boot', 'MySQL', 'Spring Security'],
    github: 'https://github.com/vvrtika',
    highlights: [
      'Implemented user authentication with Spring Security',
      'Role-based access control for job seekers and employers',
      'CRUD operations for job postings and applications',
      'REST APIs for seamless frontend-backend communication',
    ],
  },
  {
    title: 'E-Learning Platform',
    description: 'Developed an E-Learning platform featuring a user-friendly interface for navigating courses, lectures, and videos with robust database management.',
    technologies: ['Java AWT', 'JDBC', 'SQL', 'MySQL'],
    github: 'https://github.com/vvrtika',
    highlights: [
      'User-friendly interface for course navigation',
      'Efficient storage and retrieval of content',
      'Robust database management system',
      'Enhanced overall learning experience',
    ],
  },
  {
    title: 'Weather App',
    description: 'A responsive weather application offering real-time weather updates via APIs with features including temperature, humidity, wind speed, and interactive maps.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    github: 'https://github.com/vvrtika',
    highlights: [
      'Real-time weather updates via APIs',
      'Temperature, humidity, and wind speed display',
      'Location search functionality',
      'Responsive design for cross-device usability',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Guru Nanak Dev University',
    location: 'Amritsar, India',
    period: '2021 – 2025',
    gpa: '8.02/10.0',
    details: [
      'Coursework: Data Structures & Algorithms, Computer Networks, Operating Systems, DBMS, OOP',
      'Solved 450+ DSA problems on LeetCode and Code360',
      'Achieved 11 badges on LeetCode for consistency in problem-solving',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'C++', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Framework 6', 'Spring Boot', 'React.js', 'Bootstrap', 'Tailwind CSS', 'Java AWT', 'Java Swing'],
  },
  {
    category: 'Database & Tools',
    items: ['MySQL', 'JDBC', 'Git', 'GitHub'],
  },
  {
    category: 'Core Subjects',
    items: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP', 'System Design'],
  },
];

export const achievements = [
  '11 Badges on LeetCode for consistency in problem-solving',
  '450+ DSA problems solved on LeetCode and Code360',
  'Certified in Java Standard Edition and Advanced Java (April 2023)',
  'Certified in Data Structures and Algorithms in Java (April 2023)',
  '98.36 percentile in all-India NaukariCampus Young Turks contest',
  'Certified in Java Spring Framework 6 with Spring Boot 3 by Telusko',
];

export const certifications = [
  {
    title: 'Java Standard Edition and Advanced Java',
    issuer: 'Certification Authority',
    date: 'April 2023',
    link: '#',
  },
  {
    title: 'Data Structures and Algorithms in Java',
    issuer: 'Certification Authority',
    date: 'April 2023',
    link: '#',
  },
  {
    title: 'Java Spring Framework 6 with Spring Boot 3',
    issuer: 'Telusko on Udemy',
    date: '2024',
    link: '#',
  },
];
