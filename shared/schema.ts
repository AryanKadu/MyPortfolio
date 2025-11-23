import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    tagline: string;
    resumeUrl: string;
  };
  about: {
    bio: string;
    image?: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    featured: boolean;
    githubUrl?: string;
    demoUrl?: string;
  }[];
  experience: {
    id: string;
    company: string;
    role: string;
    duration: string;
    achievements: string[];
  }[];
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
  education: {
    degree: string;
    institution: string;
    duration: string;
    cgpa: string;
    details: string;
  }[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Aryan Kadu",
    role: "Full-Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    resumeUrl: "/attached_assets/Resume_AryanKadu_1763902239404.pdf",
  },
  about: {
    bio: "Third-year Computer Engineering undergraduate at PICT with a strong academic record (CGPA: 9.67). I have hands-on experience building responsive and scalable web applications as a full-stack developer. I enjoy exploring new technologies and using code to solve real-world problems.",
    stats: [
      { label: "Years of Experience", value: "2+" },
      { label: "Projects Completed", value: "5+" },
      { label: "CGPA", value: "9.67" },
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Django", "REST API"],
    },
    {
      category: "Databases & Integration",
      items: ["MongoDB", "Razorpay", "Cloudinary", "Multer"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git/GitHub", "Figma", "Flask", "ML Integration"],
    },
  ],
  projects: [
    {
      id: "monsoon",
      title: "Monsoon E-Commerce Platform",
      description: "Scalable e-commerce platform with secure authentication, payment integration, and admin dashboard",
      longDescription: "Developed a comprehensive e-commerce platform featuring secure authentication, product browsing, Razorpay payment integration, and a powerful admin dashboard for managing users, products, and orders.",
      techStack: ["Node.js", "Express", "MongoDB", "React", "Razorpay", "Cloudinary"],
      featured: true,
    },
    {
      id: "strideup",
      title: "StrideUp - Gym Management Platform",
      description: "AI-powered gym management platform with personalized workout planning and diet recommendations",
      longDescription: "Built a comprehensive gym management system with AI-powered personalized workout plans and diet recommendations, featuring member management, attendance tracking, and performance analytics.",
      techStack: ["Django", "Flask", "ML Models", "HTML/CSS", "JavaScript"],
      featured: true,
    },
  ],
  experience: [
    {
      id: "pict-acm",
      company: "PICT ACM Student Chapter",
      role: "Publicity Lead",
      duration: "2023 - Present",
      achievements: [
        "Orchestrated 5 successful publicity campaigns for PICT ACM events",
        "Achieved 40% surge in student attendance and participation",
        "Helped make PICT the largest student chapter across the community",
        "Led cross-functional teams to execute marketing strategies",
      ],
    },
  ],
  contact: {
    email: "aryanpkadu30@gmail.com",
    phone: "9423135012",
    location: "Pune, India",
    social: {
      github: "AryanKadu",
      linkedin: "AryanKadu",
    },
  },
  education: [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Pune Institute of Computer Technology (PICT), Pune",
      duration: "2023 - 2027",
      cgpa: "9.67",
      details: "Current CGPA: 9.67 (Sem I: 9.86, Sem II: 10.00, Sem III: 9.59, Sem IV: 9.23)",
    },
    {
      degree: "HSC (Science)",
      institution: "Harikisan Maloo International School, Amravati",
      duration: "2022 - 2023",
      cgpa: "78.17%",
      details: "Score: 78.17%",
    },
  ],
};
